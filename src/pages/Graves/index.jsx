import { useEffect } from "react"; 
import { useLocation, Link } from "react-router-dom"; /* USELOCATION me da acceso al objeto location (ruta actual, incluido el hash)*/
import Banner from "../../components/Banner";
import ItemListContainer from "../../components/ItemListContainer";
import "../../estilos/graves.css";
import LinkUp from "../../components/LinkUp";

const Graves = () => {
  const location = useLocation(); /* Guardo la location actual. Si voy a /graves#thinkers, location.hash va a ser "#thinkers". */

  useEffect(() => {
    if (!location.hash) return; /* Monto este efecto que se ejecuta cada vez que cambia el hash. Si no hay hash, no hace nada (no hay dónde scrollear). */

    const id = location.hash.slice(1); /* Saca el # y se queda con el ID puro (thinkers)*/
    const header = document.getElementById("header");
    const offset = header ? header.offsetHeight : 0;
    /* Busca el header por su ID. Calcula su altura para usarla como offset (así el título de la sección no queda tapado por el header sticky). */

    const scrollWithOffset = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    /* Esta función:
        Busca el elemento destino por id (por ejemplo, el <section id="thinkers">).
        Calcula la posición vertical real del elemento en la página (getBoundingClientRect().top + window.scrollY).
        Le resta el offset del header para que el título no quede oculto.
        Hace scroll suave hasta esa coordenada. */

    // Intento inmediato
    scrollWithOffset();
    /* Primer intento ya mismo. Si todo está montado, llega perfecto. */

    // Reintento después de 500ms por si todavía no se montó todo
    const t = setTimeout(scrollWithOffset, 500);
    /* Segundo intento medio segundo después porque a veces el banner/imágenes/listas terminan de montarse después del primer scroll y “empujan” el layout. Este reintento corrige eso. */

    return () => clearTimeout(t);
  }, [location.hash]);
  /* Limpia el setTimeout si cambia el hash o se desmonta el componente. El efecto se vuelve a ejecutar cada vez que cambia location.hash. */

  return (
    <div className="graves-page">
      <Banner
        image="/assets/imgs/graves/bannergraves.jpg"
        title="THE GRAVES"
        position="75% 30%"
      />
      {/* Botones para navegar entre las secciones de la misma págiba */}
      <div className="btn-graves">
        <button className="btn btn-section">
          <Link to="/graves#artists">Artists</Link>
        </button>
        <button className="btn btn-section">
          <Link to="/graves#scientists">Scientists</Link>
        </button>
        <button className="btn btn-section">
          <Link to="/graves#thinkers">Thinkers</Link>
        </button>
      </div>
      {/* Secciones por cada categoría */}
      <section id="artists" className="section">
        <h2 className="section__title">Artists</h2>
        <ItemListContainer category="artists" />
         <LinkUp />
      </section>

      <section id="scientists" className="section">
        <h2 className="section__title">Scientists</h2>
        <ItemListContainer category="scientists" />
         <LinkUp />
      </section>

      <section id="thinkers" className="section">
        <h2 className="section__title">Thinkers</h2>
        <ItemListContainer category="thinkers" />
         <LinkUp />
      </section>
    </div>
  );
};

export default Graves; 