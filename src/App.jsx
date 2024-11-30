import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinos from "./components/Destinos";
import Actividades from "./components/Actividades";
import Consejos from "./components/Consejos";
import Testimonios from "./components/Testimonios";
import Eventos from "./components/Eventos";
import Cultura from "./components/Cultura";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Destinos />
      <Actividades />
      <Consejos />
      <Testimonios />
      <Eventos />
      <Cultura />
      <Contacto />
      <Footer />
    </div>
  );
};

export default App;
