/* COMPONENTE BOTÓN VOLVER ARRIBA */
export default function LinkUp({ label = "Back to top" }) {
  const scrollToTop = () => {
    const header = document.getElementById("header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="linkUp">
      <button onClick={scrollToTop} className="linkUp">
        {label}
      </button>
    </div>
  );
}