import '../css/Carrusel.css'
import img1 from '../assets/img/carrusel/hero-carousel-1.jpg'
import img2 from '../assets/img/carrusel/hero-carousel-2.jpg'
import img3 from '../assets/img/carrusel/hero-carousel-3.jpg'


function Carrusel() {
  return (
    <section id="carrusel" className="hero section">
      <div
        id="hero-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        {/* Indicadores */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Slide 1" />
            <div className="container">
              <h2>Bienvenido a tu Historial Médico en Línea</h2>
              <p>Consulta, gestiona y solicita tu historial clínico desde cualquier lugar, de manera rápida y segura.</p>
              <a href="#about" className="btn-get-started">Leer más</a>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Slide 2" />
            <div className="container">
              <h2>Solicita tu Historial Médico en un Clic</h2>
              <p>Evita trámites presenciales. Envía tu solicitud digitalmente y recibe tu historial en minutos.</p>
              <a href="#about" className="btn-get-started">Leer más</a>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Slide 3" />
            <div className="container">
              <h2>Tu Información Está Segura</h2>
              <p>Nuestra plataforma utiliza cifrado y autenticación para proteger tus datos personales y médicos.</p>
              <a href="#about" className="btn-get-started">Leer más</a>
            </div>
          </div>
        </div>

        {/* Controles */}
        <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
  )
}

export default Carrusel
