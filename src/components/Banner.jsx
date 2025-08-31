/* COMOPONENTE BANNER DE CADA PÁGINA DEL SITIO */
import "../estilos/banner.css"

const Banner = ({ image, title, position }) => {
  return (
    <div 
      className="banner"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: position,
        placeItems: "center",
      }}
    >
      {<h2 className="banner__title">{title}</h2>}
    </div>
  );
};

export default Banner;
