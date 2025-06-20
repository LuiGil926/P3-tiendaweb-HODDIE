const obtenerProductos = async () => {
  try {
    const reponse = await fetch("https://p3-api-newxs.onrender.com/products/");
    const data = await reponse.json();
    return data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};

export default obtenerProductos;
