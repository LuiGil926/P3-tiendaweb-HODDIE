const getCart = async (id) => {
  try {
    const response = await fetch("https://p3-api-newxs.onrender.com/getcart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { status: false, message: "Error al obtener el carrito, intenta de nuevo" };
  }
};

export default getCart;