import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ItemCount from "../../components/itemCount";
import { getById } from "../../services/data";
import "../../estilos/details.css";

export default function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);  

  useEffect(() => {
    getById(id).then(res => {
      if (!res) {
        navigate("/404", { replace: true }); 
      } else {
        setItem(res);
      }
    });
  }, [id, navigate]);

  if (!item) return null;

  const addToGraveyard = () => {
    console.log(`Agregar ${cantidad} x ${item.nombre}`);
  };
  
  return (
    <main className="detail-page">
      <div className="detail-card">
        <h2>{item.nombre} {item.fecha}</h2>
        <p>{item.descripcion}</p>
        <div className="button-buy-container">
          <Link className="btn buy-button" to="/graves">← Back to the grave!</Link>
          <ItemCount initial={0} onChange={setCantidad} />
          <button className="btn buy-button" onClick={addToGraveyard}>
            Add to Graveyard for ${item.precio * cantidad}
          </button>
        </div>
      </div>
    </main>
  );
}

