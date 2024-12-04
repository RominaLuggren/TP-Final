import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // nos aseguramos de que Bootstrap aplique la funcionalidad de colapso correctamente
    const navbarCollapse = document.getElementById("navbarNav");
    if (isOpen) {
      navbarCollapse.classList.add("show");
    } else {
      navbarCollapse.classList.remove("show");
    }
  }, [isOpen]);

  return (
    <header className="custom-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/images/logodelsitio.png"
              alt="Visit Norway Logo"
              style={{ width: "150px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
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
