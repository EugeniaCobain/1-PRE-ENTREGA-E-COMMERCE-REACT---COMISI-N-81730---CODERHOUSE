/* COMPONENTE NAVEGADOR */

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import CartWidget from "./CartWidget";
import "../estilos/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);        // Para submenú "Graves"
  const [menuOpen, setMenuOpen] = useState(false); // Para menú hamburguesa

  const toggleMenu = () => setMenuOpen(v => !v);
  const closeMenu  = () => { setMenuOpen(false); setOpen(false); };

  return (
    <header id="header" className="header">
      {/* LOGO */}
      <div className="container__logo">
        <Link to="/"><img src="../logo/logo header.png" alt="Logo" /></Link>
      </div>

      {/* MENÚ HAMBURGUESA PARA RESPONSIVE */}
      <button className="btn-hamb" onClick={toggleMenu}>
        <img
          src="../logo/iconohamb.png"
          alt="Open Menu"
          className={`svg abrirhamb ${menuOpen ? "is-hidden" : ""}`}
        />
        <img
          src="../logo/iconohambX.png"
          alt="Close Menu"
          className={`svg cerrarhamb ${menuOpen ? "" : "is-hidden"}`}
        />
      </button>

      {/* NAVBAR*/}
      <nav id="main-nav" className={`nav ${menuOpen ? "activo" : ""}`}>
        <ul className="nav-links">
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          {/* LINK A PÁGINA GRAVES Y SU SUBMENÚ */}
          <li className={`has-submenu ${open ? "active" : ""}`}>
            <div className="graves-container">
              <NavLink to="/graves" className="graves_btn" onClick={closeMenu}>The Graves</NavLink>
              <button className="arrow graves_btn"
                          onClick={(e) => {
                            e.preventDefault(); /* evita cualquier comportamiento por defecto (por si el botón está en un <form> o algún handler padre). */
                            e.stopPropagation();/* evita que el click “burbujee” hacia el NavLink u otros elementos padres y termine navegando. */
                            setOpen(!open); /* Alterna el estado local open para abrir/cerrar el submenú sin cambiar de página. */
                          }}
                  >
                   {open ? "▲" : "▼"} {/* Muestra la flecha hacia arriba si el submenú está abierto, hacia abajo si está cerrado (feedback visual simple). */}
                    {/* {open ? (
  <img 
    src="../logo/OPENCOFFIN1.png" 
    alt="Tombstone" 
    style={{ width: "24px", height: "24px" }} 
  />
) : (
  <img 
    src="../logo/CLOSEDCOFFIN1.png" 
    alt="Coffin" 
    style={{ width: "24px", height: "24px" }} 
  />
)} */}
              </button>
            </div>
            <ul className={`submenu ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
              <li className="submenu__item"><Link to="/graves#artists"    onClick={closeMenu}>Artists</Link></li>
              <li className="submenu__item"><Link to="/graves#scientists" onClick={closeMenu}>Scientists</Link></li>
              <li className="submenu__item"><Link to="/graves#thinkers"   onClick={closeMenu}>Thinkers</Link></li>
            </ul>
          </li>
          <li><NavLink to="/Veremos" onClick={closeMenu}>Locations</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
        {/* EXTRAS: BUSCADOR, CARRITO Y LOG IN */}
        <div className="extras-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <input className="buscar_input" type="search" placeholder="Search..." />
          </form>
          <div id="abrir-carrito-btn" onClick={closeMenu}>
            <CartWidget />
          </div>
          {/* LOG IN COMENTADO. QUEDA PREPARADO POR SI LO NECESITO PARA ENTREGA FINAL */}
          {/* <button className="log" id="nav-login" type="button"><Link to="/login">Log out</Link></button> */}
        </div>
      </nav>
    </header>
  );
}