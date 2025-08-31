/* COMPONENTE SECCIONES PÁGINA HOME*/
export default function HomeSection({ title, children, imgSrc, imgAlt = "", side = "right" }) {
  return (
    <section className={`home-section ${side}`}>
      <div className="home-text">
        <h2>{title}</h2>
        {children}
      </div>

      {imgSrc && (
        <div className="home-media">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      )}
    </section>
  );
}