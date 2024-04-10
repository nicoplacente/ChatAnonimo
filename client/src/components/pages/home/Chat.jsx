import { useState, useEffect, useRef } from "react";
import { AudioButton, Send } from "../../icons/Icons";
import io from "socket.io-client";
import SectionContainer from "../../reusable/SectionContainer";

const socket = io(import.meta.env.VITE_URL);

const notificacion = new Audio();

// const isMuted =
//   localStorage.getItem("sound") == true ? "/sounds/message.mp3" : "";

// notificacion.src = isMuted;
notificacion.src = "/sounds/message.mp3";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== "") {
      socket.emit("message", message);
      const newMessage = {
        body: message,
        from: "Me",
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const messageReceived = (message) => {
      notificacion.play();
      setMessages([...messages, message]);
    };
    socket.on("message", messageReceived);

    return () => {
      socket.off("message", messageReceived);
    };
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [theme, setTheme] = useState("#FF0000");

  useEffect(() => {
    const themeColor = localStorage.getItem("theme");
    if (themeColor) {
      setTheme(themeColor);
    }
  }, []);

  return (
    <SectionContainer>
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 shadow-xl w-full h-96 rounded-md flex flex-col items-center justify-between px-6 py-9"
      >
        <h1
          style={{ color: theme }}
          className="scale-75 md:scale-90 lg:scale-100 -translate-y-12 translate-x-14 rotate-[12deg] lg:-translate-y-3 lg:translate-x-80 lg:rotate-[33deg] tracking-wider text-3xl"
        >
          StealthSecrets
        </h1>
        <ul
          id="lista-mensajes"
          className="w-full flex flex-col gap-2 items-center overflow-y-auto my-4"
        >
          {messages.map((message, index) => {
            return (
              <li
                className={`w-full flex ${
                  message.from == "Me" ? "justify-end" : "justify-start"
                }`}
                key={index}
              >
                <span
                  style={{ background: message.from == "Me" ? theme : "#000" }}
                  className="text-white text-sm rounded-md p-2 w-fit"
                >
                  {message.from}: {message.body}
                </span>
              </li>
            );
          })}
          <div ref={messagesEndRef} />
        </ul>
        <div className="flex items-center gap-3 border-t-2 border-black/15 max-w-96 w-full justify-center pt-2 ">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Mensaje"
            className="p-2 rounded-md"
            value={message}
          />
          <button
            style={{ background: theme }}
            aria-label="Enviar mensaje"
            className="text-white p-2 rounded-full transition duration-300 active:hover:opacity-70 lg:hover:opacity-70"
          >
            <Send />
          </button>

          <button
            style={{ background: theme }}
            aria-label="Mandar audio"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              alert("No disponible");
            }}
            className=" text-white p-2 rounded-full transition duration-300 active:hover:opacity-70 lg:hover:opacity-70"
          >
            <AudioButton />
          </button>
        </div>
      </form>
    </SectionContainer>
  );
}
