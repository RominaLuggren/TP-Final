import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/logodelsitio.png" alt="Visit Norway Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#destinos">Destinos</a>
          </li>
          <li>
            <a href="#actividades">Actividades</a>
          </li>
          <li>
            <a href="#eventos">Eventos</a>
          </li>
          <li>
            <a href="#cultura">Cultura</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
