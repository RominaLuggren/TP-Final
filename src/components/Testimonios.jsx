import React, { useState } from "react";

const Testimonios = () => {
  // estado para almacenar los comentarios
  const [comentarios, setComentarios] = useState([
    {
      texto:
        "Fue una experiencia inolvidable, la atención y los lugares que visitamos fueron espectaculares.",
      autor: "Ana G.",
    },
    {
      texto:
        "Recomiendo totalmente esta página, encontré los mejores destinos y consejos.",
      autor: "Juan P.",
    },
    {
      texto:
        "Gracias a esta página pude organizar mi viaje soñado a Europa, ¡fue increíble!",
      autor: "María L.",
    },
  ]);

  // estado del nuevo comentario
  const [nuevoComentario, setNuevoComentario] = useState({
    texto: "",
    autor: "",
  });

  // función que maneja el cambio en el nuevo comentario
  const handleChange = (e) => {
    const { name, value } = e.target; //elemento que disparó el evento
    setNuevoComentario({
      ...nuevoComentario,
      [name]: value,
    });
  };

  // función que agrega un nuevo comentario
  const agregarComentario = () => {
    if (nuevoComentario.texto && nuevoComentario.autor) {
      setComentarios([
        ...comentarios,
        {
          texto: nuevoComentario.texto,
          autor: nuevoComentario.autor,
        },
      ]);
      setNuevoComentario({ texto: "", autor: "" }); // limpia los campos
    } else {
      alert("Por favor, completa ambos campos.");
    }
  };

  return (
    <section id="testimonios" className="testimonios">
      <h2>Testimonios de viajeros</h2>
      <div className="testimonios-grid">
        {/* Mostrar los testimonios existentes */}
        {comentarios.map((comentario, index) => (
          <blockquote key={index}>
            <p>"{comentario.texto}"</p>
            <footer>- {comentario.autor}</footer>
          </blockquote>
        ))}
      </div>

      {/* formulario para agregar nuevo comentario */}
      <div className="agregar-comentario">
        <h3>Agregar tu comentario</h3>
        <textarea
          name="texto"
          value={nuevoComentario.texto}
          onChange={handleChange}
          placeholder="Escribe tu comentario aquí..."
          rows="4"
        />
        <input
          type="text"
          name="autor"
          value={nuevoComentario.autor}
          onChange={handleChange}
          placeholder="Tu nombre"
        />
        <button onClick={agregarComentario}>Agregar Comentario</button>
      </div>
    </section>
  );
};

export default Testimonios;
