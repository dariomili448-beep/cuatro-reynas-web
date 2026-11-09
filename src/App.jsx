import './App.css'

function App() {
  return (
    <div className="pagina">

      <header className="encabezado">
        <div className="logo">
  <img
    src="/logo-cuatro-reynas.png"
    alt="Cuatro Reynas Eventos"
  />
</div>
        

        <nav>
          <a href="#inicio">INICIO</a>
          <a href="#servicios">SERVICIOS</a>
          <a href="#galeria">GALERÍA</a>
          <a href="#contacto">CONTACTO</a>
        </nav>
      </header>

      <section className="portada" id="inicio">
  <video className="portada-video" autoPlay muted loop playsInline>
    <source src="/portada-video.mp4" type="video/mp4" />
  </video>

  <div className="portada-capa"></div>

  <div className="portada-contenido">
    <p className="subtitulo">HACEMOS ESPECIALES TUS MOMENTOS</p>

    <h2>
      Momentos únicos.<br />
      <span>Eventos inolvidables.</span>
    </h2>

    <p>
      Creamos experiencias para celebrar los momentos
      más importantes de tu vida.
    </p>

    <a className="boton" href="#contacto">
      SOLICITAR PRESUPUESTO
    </a>
  </div>
</section>

      <section className="servicios" id="servicios">
        <p className="subtitulo">NUESTROS SERVICIOS</p>
        <h2>Todo para tu evento</h2>

        <div className="servicios-grid">
          <article className="servicio">
            <div className="icono">♛</div>
            <h3>Carpas para eventos</h3>
            <p>
              Estructuras propias, diferentes medidas
              y opciones calefaccionadas.
            </p>
          </article>

          <article className="servicio">
            <div className="icono">♫</div>
            <h3>Sonido e iluminación</h3>
            <p>
              Equipamiento para cumpleaños, quinceañeras
              y grandes celebraciones.
            </p>
          </article>

          <article className="servicio">
            <div className="icono">✦</div>
            <h3>Candy Bar</h3>
            <p>
              Un detalle especial para hacer
              inolvidable cada celebración.
            </p>
          </article>
        </div>
      </section>
<section className="galeria" id="galeria">
  <p className="subtitulo">NUESTROS TRABAJOS</p>
  <h2>Momentos que merecen celebrarse</h2>
  <p className="galeria-descripcion">
    Conocé algunos de nuestros eventos y servicios.
  </p>

  <div className="galeria-grid">
    {Array.from({ length: 14 }, (_, i) => (
      <div className="galeria-item" key={i}>
       <img
  src={`/carpa-${i + 1}.jpg`}
  alt={`Carpa para eventos ${i + 1}`}
/>
        <div className="galeria-overlay">
          <span>CUATRO REYNAS</span>
          <h3>Carpas para eventos</h3>
        </div>
      </div>
    ))}

    <div className="galeria-item">
      <img src="/candybar-1.jpg" alt="Candy Bar para eventos" />
      <div className="galeria-overlay">
        <span>CUATRO REYNAS</span>
        <h3>Candy Bar</h3>
      </div>
    </div>
  </div>
</section>

      <section className="contacto" id="contacto">
        <p className="subtitulo">ESTAMOS PARA AYUDARTE</p>
        <h2>¿Organizamos tu próximo evento?</h2>
        <p>Consultanos y prepararemos una propuesta para vos.</p>
        <a
  className="boton"
  href="https://wa.me/542617465285?text=Hola%2C%20quisiera%20consultar%20por%20los%20servicios%20de%20Cuatro%20Reynas%20Eventos%20y%20solicitar%20un%20presupuesto."
  target="_blank"
  rel="noopener noreferrer"
>
  CONSULTAR POR WHATSAPP
</a>
      </section>

      <footer>
       <a
  className="whatsapp-flotante"
  href="https://wa.me/542617465285?text=Hola%2C%20quisiera%20consultar%20por%20los%20servicios%20de%20Cuatro%20Reynas%20Eventos%20y%20solicitar%20un%20presupuesto."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Consultar por WhatsApp"
  title="Consultar por WhatsApp"
>
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path
      fill="currentColor"
      d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 6.9L3.2 29l6.5-1.7c1.9 1 4.1 1.5 6.3 1.5h.1c7.2 0 13-5.8 13-12.9C29.1 8.7 23.2 3 16 3zm0 23.5c-2 0-3.9-.5-5.5-1.5l-.4-.2-3.9 1 1-3.8-.3-.5c-1.1-1.7-1.7-3.7-1.7-5.7C5.2 9.7 10 5 16 5s10.8 4.7 10.8 10.8S22 26.5 16 26.5zm5.9-8.1c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"
    />
  </svg>
</a>
        <h2>CUATRO REYNAS</h2>
        <p>EVENTOS & EXPERIENCIAS</p>
        <p>© 2026 Cuatro Reynas Eventos</p>
      </footer>

    </div>
  )
}

export default App