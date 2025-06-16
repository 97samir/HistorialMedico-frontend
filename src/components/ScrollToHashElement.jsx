// para navegar de una pagina "/" a una seccion "#"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Espera un momento para que el DOM se haya renderizado
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // puedes ajustar el delay si no carga bien
    } else {
      // Si no hay hash, hace scroll al top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

export default ScrollToHashElement;
