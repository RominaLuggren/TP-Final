import React from "react";

const Contacto = () => {
  return (
    <section id="contacto" className="contacto">
      <h2>Contáctanos</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
