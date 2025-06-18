const obtenerProductos = async () => {
  try {
    const urls = [
      "https://fakestoreapi.com/products/category/men's%20clothing",
      "https://fakestoreapi.com/products/category/women's%20clothing",
      "https://fakestoreapi.com/products/category/jewelery"
    ];

    const respuestas = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(respuestas.map(res => res.json()));

    return data.flat();
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};

export default obtenerProductos;
