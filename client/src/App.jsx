import { Route, Routes } from "react-router-dom";
import Chat from "./components/pages/home/Chat";
import Info from "./components/pages/info/Info";
import Configuracion from "./components/pages/configuracion/Configuracion";
import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";

export default function App() {
  return (
    <main className="h-screen flex flex-col items-center w-full justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/info" element={<Info />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Routes>

      <Footer />
    </main>
  );
}
