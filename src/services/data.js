const DATA_API_EUGE = "/personajes.json";

// 1) Traer TODO el JSON
export function getAll() {
  return fetch(DATA_API_EUGE)
    .then(respuesta => respuesta.json())
    .catch(error => console.error("No se pudo cargar el JSON de EUGENIA:", error));
}

// 2) Traer por categoría
export function getByCategory(category) {
  return fetch(DATA_API_EUGE)
    .then(respuesta => respuesta.json())
    .then(data => data[category] || [])
    .catch(error => console.error("Error en la búsqueda por categoría:", error));
}

// 3) Traer por ID (busca en todas las categorías)
export function getById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {                             // 👈 delay simple
      fetch(DATA_API_EUGE)
        .then(respuesta => respuesta.json())
        .then(data => {
          const all = [
            ...(data.artists || []),
            ...(data.scientists || []),
            ...(data.thinkers || []),
          ];
          const found = all.find(personaje => String(personaje.id) === String(id)) || null;
          resolve(found);
        })
        .catch(reject);
    }, 600);                                        // 👈 600ms de retardo
  });
}
/* 🔑 Con esto tenés:

getAll() → devuelve todo el JSON.

getByCategory("artists") → devuelve solo esa parte.

getById(3) → busca un producto puntual. */