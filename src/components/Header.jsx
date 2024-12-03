import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  return (
    <header className="custom-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="/images/logodelsitio.png"
              alt="Visit Norway Logo"
              style={{ width: "150px" }}
            />
          </a>

          {/* Botón de menú */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#destinos">
                  Destinos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#actividades">
                  Actividades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#eventos">
                  Eventos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cultura">
                  Cultura
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
