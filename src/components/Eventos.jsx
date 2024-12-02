import React from "react";

const Eventos = () => {
  return (
    <section id="eventos" className="eventos">
      <h2>Eventos Culturales Internacionales</h2>
      <div className="eventos-grid">
        <article>
          <a
            href="https://www.songkick.com/es/metro-areas/31419-norway-bergen"
            target="_blank"
          >
            <h3>Festival de Música de Bergen</h3>
            <p>
              Un festival de música clásica con artistas de renombre mundial.
            </p>
          </a>
        </article>
        <article>
          <a
            href="https://turismo.buenosaires.gob.ar/es/article/a%C3%B1o-nuevo-chino"
            target="_blank"
          >
            <h3>Año Nuevo Chino</h3>
            <p>
              Un evento espectacular celebrado en muchas ciudades del mundo, con
              desfiles y fuegos artificiales.
            </p>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Eventos;
