import React from "react";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: "url(images/imagenfondo.jpg)" }}
    >
      <div className="hero-text">
        <h1>Explora la belleza del mundo</h1>{" "}
        <p>Explora culturas, paisajes y aventuras en cada rincón del planeta</p>
        <a href="#destinos" className="btn">
          Ver destinos
        </a>
      </div>
    </section>
  );
};

export default Hero;
