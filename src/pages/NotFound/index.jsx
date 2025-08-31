import { Link } from "react-router-dom";
import { useEffect } from "react";
import notFoundImg from "../../../public/logo/graveyard.png";
import "../../estilos/notFound.css";

export default function NotFound() {
  useEffect(() => {
    document.body.classList.add("no-nav");
    return () => document.body.classList.remove("no-nav");
  }, []);

  return (
    <main className="notfound-page">
      <h1>OOPS! </h1>
      <h2>404 – Grave Not Found</h2>
      <p>It looks like the grave you’re looking for doesn’t exist…</p>
      <p>The link you followed is probably broken or the page has been removed.</p>
      <Link className="btn buy-button" to="/">← Back to the graveyard</Link>
      <img src={notFoundImg} alt="Not Found" className="notfound-img" />
    </main>
  );
}