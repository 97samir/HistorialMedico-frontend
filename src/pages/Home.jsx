import Carrusel from '../components/Carrusel';
import Doctores from '../components/Doctores';
import SolicitarHistorial from '../components/SolicitarHistorial';
import ConsultaEstado from '../components/ConsultaEstado';
import MiHistorial from '../components/MiHistorial';
import Contacto from '../components/Contacto';



function Home() {
  return (
    <>
      {/* Sección con ID para navegación por hash */}
      <section id="carrusel">
        <Carrusel />
      </section>

      <section id="doctores">
        <Doctores />
      </section>

      <section id="solicitar">
        <SolicitarHistorial />
      </section>

      <section id="estado">
        <ConsultaEstado />
      </section>

      <section id="historial">
        <MiHistorial />
      </section>

      <section id="contacto">
        <Contacto />
      </section>

    </>
  );
}

export default Home;
