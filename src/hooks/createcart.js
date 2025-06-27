const createCart = async (id) => {
  try {
    const response = await fetch("https://p3-api-newxs.onrender.com/createCart", {
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
    return { status: false, message: "Error al crear el carrito, intenta de nuevo" };
  }
};

export default createCart;