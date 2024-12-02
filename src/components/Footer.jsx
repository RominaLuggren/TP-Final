import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <p>&copy; 2024 Go Travel - Todos los derechos reservados</p>
        <nav>
          <ul>
            <li>
              <a href="#politica">Política de Privacidad</a>
            </li>
            <li>
              <a href="#terminos">Términos de Servicio</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Eliana Gimenez</a>
            </li>
            <li>
              <a href="">Romina Luggren</a>
            </li>
            <li>
              <a href="">Mariano Bernal</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://www.instagram.com/go.travelers/">Instragram</a>
            </li>
            <li>
              <a href="https://x.com/gotravel">Twitter</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
