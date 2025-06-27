const deleteProductCart = async (carrito_id, producto_id) => {
  try {
    const response = await fetch("https://p3-api-newxs.onrender.com/deleteProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        carrito_id,
        producto_id
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { status: false, message: "Error al eliminar del carrito, intenta de nuevo" };
  }
};

export default deleteProductCart;