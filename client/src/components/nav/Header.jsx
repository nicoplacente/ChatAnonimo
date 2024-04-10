import { useState, useEffect } from "react";
import Nav from "./Nav";
import SectionContainer from "../reusable/SectionContainer";
import { Bars } from "../icons/Icons";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <SectionContainer>
      <button
        aria-label="Abrir menú"
        onClick={handleOpenNav}
        className="fixed my-9 text-white mx-12 top-0 right-0 p-2 active:text-zinc-950/30 lg:hover:text-zinc-950/30 transition duration-300"
      >
        <Bars />
      </button>

      {openNav && <Nav setOpenNav={setOpenNav} />}
    </SectionContainer>
  );
}
