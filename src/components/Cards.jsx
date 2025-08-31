/* COMPONENTE GENERADOR DE TARJETAS DE LOS PRODUCTOS */
import { Link } from "react-router-dom";
import "../estilos/cards.css";

const ItemCard = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="face front">
          <img src={item.imagen} alt={item.nombre} />
          <h3>{item.nombre}</h3>
        </div>
      </div>

      <div className="button-buy-container">
        <Link className="btn buy-button" to={`/detail/${item.id}`}>
          Dig up more details!
        </Link>
      </div>
    </div>
  );
};
export default ItemCard;