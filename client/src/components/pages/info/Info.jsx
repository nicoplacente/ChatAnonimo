import SectionContainer from "../../reusable/SectionContainer";
import { useState, useEffect } from "react";

const finalidad = [
  {
    title: "Finalidad de la app",
    info: "La aplicación se ha creado con el propósito de brindar entretenimiento y establecer una comunidad en la cual todos puedan compartir y expresar sus pensamientos y sentimientos sin restricciones y de manera completamente anónima.",
  },
  {
    title: "Como Funciona",
    info: 'Los mensajes de todos los usuarios aparecerán como "Anónimo", incluidos los tuyos, ya que no es necesario crear una cuenta para utilizar la aplicación. Lo más intrigante es que podrías estar interactuando con hasta 50 personas simultáneamente sin saber quién es quién. Mientras mantengas la sesión iniciada, los mensajes se actualizarán constantemente en tiempo real. Al cerrar la aplicación, los mensajes se borrarán y nadie más podrá verlos. La idea es mantenerse alerta, ¡podrías perderte información interesante! ;)',
  },
  {
    title: "Privacidad",
    info: "StealthSecrets es una plataforma de chat web que garantiza la máxima confidencialidad y seguridad para tus conversaciones. Con mensajes temporales y anonimato total, tu privacidad está protegida en todo momento. Únete a StealthSecrets y comunícate libremente, sabiendo que tus secretos están a salvo.",
  },
];
export default function Info() {
  const [theme, setTheme] = useState("#FF0000");

  useEffect(() => {
    const themeColor = localStorage.getItem("theme");
    if (themeColor) {
      setTheme(themeColor);
    }
  }, []);
  return (
    <SectionContainer classname="gap-20">
      {finalidad.map((info, index) => {
        return (
          <article key={index} className="grid grid-cols-1 w-full gap-6">
            <h3 style={{ color: theme }} className="text-3xl  font-semibold">
              {info.title}
            </h3>
            <p className="text-pretty text-sm md:text-base  text-white/70">
              {info.info}
            </p>
          </article>
        );
      })}
      <h2 className="text-zinc-950 w-full px-20 text-end ">Versión 1.2.0</h2>
    </SectionContainer>
  );
}
