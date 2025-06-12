import '../css/Footer.css'

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">Medicio</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Av. Santiago de Surco N° 4717, </p>
              <p>Santiago de Surco 15039</p>
              <p className="mt-3"><strong>Teléfono:</strong> <span>+51 987 654 321</span></p>
              <p><strong>Correo:</strong> <span>JairoTuTerror@gmail.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Secciones', items: ['Solicitar Historial Médico', 'Consultar Estado de Solicitudes', 'Mi historial', 'Politicas de privacidad'] },
            { title: 'Doctores', items: ['Walter White', 'Sarah Jhonson', 'William Anderson', 'Amanda Jepson'] },
            { title: 'Especialidades', items: ['Médico Internista', 'Médico Familiar', 'Médico General', 'Médico Legal'] },
            { title: 'Redes Sociales', items: ['Facebook', 'X', 'Instagram', 'LinkedIn', 'Youtube'] }
          ].map((section, index) => (
            <div className="col-lg-2 col-md-3 footer-links" key={index}>
              <h4>{section.title}</h4>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center mt-4 copyright">
        <p>© 
          <span>Copyright</span> 
          <strong className="px-1 sitename">GrupoX</strong> 
          <span>Todos los derechos reservados</span>
        </p>
        <div className="credits">
          Elaborado por  <a href="#" target="_blank" rel="noopener noreferrer">Los terribles del SQL</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer