import { Logo } from "../icons/Icons";
import { useState, useEffect } from "react";

export default function Footer() {
  const [theme, setTheme] = useState("#FF0000");

  useEffect(() => {
    const themeColor = localStorage.getItem("theme");
    if (themeColor) {
      setTheme(themeColor);
    }
  }, []);
  return (
    <footer className="text-white bg-zinc-900 w-full flex justify-center">
      <span className="flex text-xs lg:text-sm items-center gap-2">
        © Powered by{" "}
        <a
          aria-label="Ir a codeluxe"
          target="_blank"
          className="hover:underline"
          href="/https://codeluxe.tech"
        >
          CODELUXE
        </a>{" "}
        <img
          src="/codeluxe.webp"
          alt="Logo codeluxe"
          title="Logo codeluxe"
          className="size-12"
        />
        x
        <Logo theme={theme} />
      </span>
    </footer>
  );
}
