import React from "react";

const Actividades = () => {
  return (
    <section id="actividades" className="actividades">
      <h2>Actividades al aire libre y experiencias únicas.</h2>
      <div className="actividades-grid">
        <article>
          <h3>Buceo en la Gran Barrera del Coral</h3>
          <p>
            Sumérgete en uno de los ecosistemas marinos más grandes y hermosos
            del mundo.
          </p>
        </article>
        <article>
          <h3>Senderísmo en los Alpes</h3>
          <p>
            Camina por las montañas más famosas de Europa y disfruta de vistas
            espectaculares.
          </p>
        </article>
        <article>
          <h3>Surf en las playas de Hawái</h3>
          <p>
            Practica surf en las olas más famosas del mundo en las playas
            paradisíacas de Hawái.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Actividades;
