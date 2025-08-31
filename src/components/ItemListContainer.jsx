/* COMPONENTE QUE OBTIENE LOS PRODUCTOS DE MI API E INSERTA LA DATA EN LAS CARDS */
import { useEffect, useState } from "react";
import { getByCategory } from "../services/data";
import ItemCard from "./Cards";

const ItemListContainer = ({ category }) => {
const [items, setItems] = useState([]);

useEffect(() => {
  getByCategory(category)
    .then((data) => setItems(data))
    .catch((err) => console.error(err));
}, [category]);

return (
  <div className="grave-container">
    {items.map((personaje) => (
      <ItemCard key={`${category}-${personaje.id}`} item={personaje} />
    ))}
  </div>
);};

export default ItemListContainer;
