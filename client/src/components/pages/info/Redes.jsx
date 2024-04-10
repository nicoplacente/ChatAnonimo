import { Terminal, Discord, Instagram } from "../../icons/Icons";

const redes = [
  {
    name: "Discord",
    icon: Discord,
    link: "https://discord.gg/VATYyRtHZf",
    style: "bg-[#5b67f6] text-white shadow-lg shadow-[#5b67f6]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/codeluxe_/",
    style:
      "bg-gradient-to-b from-[#fe5301] to-[#df00e2] text-white shadow-lg shadow-[#df00e2]",
  },
  {
    name: "Codeluxe",
    icon: Terminal,
    link: "https://codeluxe.tech/",
    style:
      "bg-gradient-to-b from-[#ff9] to-black/10  text-black shadow-lg shadow-[#ff9]",
  },
];

export default function Redes() {
  return (
    <footer>
      <h4 className="text-xl text-balance text-center text-white/90 radial">
        Si quieres aportar ideas o unirte a nuestra comunidad entra aquí:
      </h4>
      <ul className="w-fit grid grid-cols-3 gap-6  mx-auto my-6">
        {redes.map((red, index) => {
          return (
            <a
              key={index}
              aria-label={red.name}
              target="_blank"
              href={red.link}
              className={`${red.style} rounded-xl p-2 hover:scale-110 transition duration-300`}
            >
              <red.icon />
            </a>
          );
        })}
      </ul>
    </footer>
  );
}
