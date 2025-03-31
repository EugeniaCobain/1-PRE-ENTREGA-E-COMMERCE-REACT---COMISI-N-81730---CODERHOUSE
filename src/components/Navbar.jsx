import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="container__logo">
        <img src="../logo/logo header.png" alt="" />
      </div>

      {/* Menú de navegación */}
      <nav className="container__menu">
        <ul className="nav_links">
          <li className="li">Home</li>
          <li className="li">Artists</li>
          <li className="li">Scientists</li>
          <li className="li">Thinkers</li>
        </ul>
      </nav>
      
      {/* Carrito */}
      <div className="cart">
        <CartWidget />
      </div>
    </header>
  );
};

export default Navbar;
