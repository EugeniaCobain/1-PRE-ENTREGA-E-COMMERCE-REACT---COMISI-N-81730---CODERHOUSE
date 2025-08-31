/* COMPONENTE BOTÓN AGREGAR/QUITAR PRODTCOS */
import { useState } from "react";
import "../estilos/details.css";

export default function ItemCount({ initial = 1, onChange }) {
  const [cantidad, setCantidad] = useState(initial);

  const restarProd = () => {
    const n = cantidad > 1 ? cantidad - 1 : 1;
    setCantidad(n);
    onChange?.(n);
  };

  const agregarProd = () => {
    const n = cantidad + 1;
    setCantidad(n);
    onChange?.(n);
  };

  return (
    <div className="item-count">
      <button type="button" className="boton-cantidad" onClick={restarProd}>−</button>
      <output>{cantidad}</output>
      <button type="button" className="boton-cantidad" onClick={agregarProd}>+</button>
    </div>
  );
}