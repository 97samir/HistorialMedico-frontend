import '../css/Contacto.css'

function Contacto() {
  return (
    <section id="contact" className="contact section">
      {/* Título */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contacto</h2>
        <p>Completa el siguiente formulario y nos pondremos en contacto contigo lo más pronto posible.</p>
      </div>

      {/* Google Maps */}
      <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
        <iframe 
            style={{ border: 0, width: '100%', height: '370px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.614636354496!2d-76.99049523795152!3d-12.144314239708667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b81367c29a0f%3A0xc23ac16a6ad77d47!2sCERTUS%20Surco!5e0!3m2!1ses!2spe!4v1749434042150!5m2!1ses!2spe" 
            frameBorder="0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      {/* Información de contacto y formulario */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Información de contacto */}
          <div className="col-lg-6">
            <div className="row gy-4">
                
              <div className="col-lg-12">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Ubicación</h3>
                  <p>Av. Santiago de Surco N° 4717, Santiago de Surco 15039</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-telephone"></i>
                  <h3>Llámanos</h3>
                  <p>+51 987 654 321</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope"></i>
                  <h3>Correo</h3>
                  <p>JairoTuTerror@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="col-lg-6">
            <form className="php-email-form" data-aos="fade-up" data-aos-delay="500">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Nombres y Apellidos" required />
                </div>

                <div className="col-md-6">
                  <input type="email" name="email" className="form-control" placeholder="Correo electrónico" required />
                </div>

                <div className="col-md-12">
                  <input type="text" name="subject" className="form-control" placeholder="Asunto" required />
                </div>

                <div className="col-md-12">
                  <textarea name="message" rows="4" className="form-control" placeholder="Mensaje" required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Tu mensaje ha sido enviado. Muchas Gracias!</div>
                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
