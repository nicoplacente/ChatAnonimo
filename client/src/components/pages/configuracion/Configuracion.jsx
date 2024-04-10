import SectionContainer from "../../reusable/SectionContainer";
import { useState, useEffect } from "react";
import { Muted, NoMuted } from "../icons/Icons";

export default function Configuracion() {
  const INITIAL_THEME_VALUE = "#FF0000";
  const [theme, setTheme] = useState(INITIAL_THEME_VALUE);

  const handleChangeColor = (e) => {
    setTheme(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const themeColor = localStorage.getItem("theme");
    if (themeColor) {
      setTheme(themeColor);
    }
  }, []);

  const [isMuted, setIsMuted] = useState(false);

  const handleMuted = () => {
    setIsMuted(!isMuted);
  };

  return (
    <SectionContainer>
      <h3
        style={{ color: theme }}
        id="config"
        className="tracking-wider text-3xl"
      >
        Configuración
      </h3>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col md:flex-row items-center justify-evenly gap-6 border-2"
      >
        <article className="flex items-center gap-4">
          <span className="text-zinc-950 font-semibold">Cambiar Tema</span>
          <input type="color" value={theme} onChange={handleChangeColor} />
        </article>
        <article className="flex items-center gap-4">
          <button
            style={{ background: theme }}
            aria-label="Aplicar tema"
            className={`text-white w-full md:w-fit active:opacity-70 lg:hover:opacity-70 transition duration-300 p-2 rounded-md shadow-xl`}
          >
            Aplicar tema
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              localStorage.removeItem("theme");
              setTheme(INITIAL_THEME_VALUE);
            }}
            style={{ background: theme }}
            aria-label="Eliminar tema"
            className={`text-white w-full md:w-fit active:opacity-70 lg:hover:opacity-70 transition duration-300 p-2 rounded-md shadow-xl`}
          >
            Eliminar tema
          </button>
        </article>
      </form>

      <button
        aria-label="Silenciar/Activar Sonido"
        onClick={handleMuted}
        className="text-white scale-150 flex items-center gap-2 p-2 active:text-zinc-950/30 lg:hover:text-zinc-950/30 transition duration-300"
      >
        <span className="text-zinc-950 font-semibold">
          Activar/Desactivar silencio
        </span>
        {isMuted ? <Muted /> : <NoMuted />}
      </button>
    </SectionContainer>
  );
}
