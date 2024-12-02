import React from "react";

const Destinos = () => {
  return (
    <section id="destinos" className="destinos-populares">
      <h2>Destinos populares</h2>
      <div className="destinos-grid">
        <article>
          <a href="https://www.paris.es/que-ver" target="_blank">
            <img src="/images/paris.jpg" alt="Paris" />
          </a>
          <h3>Paris</h3>
          <p>
            Explora la impresionante torre eiffel, una ciudad única y
            majestuosa.
          </p>
        </article>
        <article>
          <a
            href="https://www.enroma.com/10-lugares-turisticos-de-roma/"
            target="_blank"
          >
            <img src="/images/roma.jpeg" alt="Roma" />
          </a>
          <h3>Roma</h3>
          <p>
            Vive la increible experiencia de ver los históricos monumentos en
            persona.
          </p>
        </article>
        <article>
          <a
            href="https://www.viajeroscallejeros.com/lugares-que-visitar-tokio/"
            target="_blank"
          >
            <img src="/images/tokyo.jpg" alt="Tokyo" />
          </a>
          <h3>Tokyo</h3>
          <p>Descubre Tokyo, la ciudad que nunca duerme.</p>
        </article>
      </div>
    </section>
  );
};

export default Destinos;
