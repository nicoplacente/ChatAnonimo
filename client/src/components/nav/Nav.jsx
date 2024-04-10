import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav({ setOpenNav }) {
  const [theme, setTheme] = useState("#FF0000");

  useEffect(() => {
    const themeColor = localStorage.getItem("theme");
    if (themeColor) {
      setTheme(themeColor);
    }
  }, []);

  return (
    <nav
      style={{ background: `${theme}33` }}
      className="flex text-zinc-200/50 flex-col items-start gap-1  z-10  rounded-md overflow-hidden shadow-xl top-24 right-9 fixed"
    >
      <Link
        aria-label="Ir al chat"
        to="/"
        className="transition duration-300 active:bg-zinc-950/30 lg:hover:bg-zinc-950/30 cursor-pointer text-sm p-2 w-full"
        onClick={() => setOpenNav(false)}
      >
        Chat
      </Link>
      <Link
        aria-label="Ver info"
        to="/info"
        className="transition duration-300 hover:bg-zinc-950/30 cursor-pointer text-sm p-2 w-full"
        onClick={() => setOpenNav(false)}
      >
        Info
      </Link>
      <Link
        aria-label="Configuración"
        to="/configuracion"
        className="transition duration-300 hover:bg-zinc-950/30 cursor-pointer text-sm p-2 w-full"
        onClick={() => setOpenNav(false)}
      >
        Configuración
      </Link>
    </nav>
  );
}
