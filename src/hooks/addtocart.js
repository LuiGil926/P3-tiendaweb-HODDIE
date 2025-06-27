const addToCart = async (id, producto_id, cantidad) => {
  try {
    
    const carritoId = parseInt(id);
    const productoId = parseInt(producto_id);
    const cantidadNum = parseInt(cantidad);


    const response = await fetch("https://p3-api-newxs.onrender.com/addcart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: carritoId,           
        producto_id: productoId, 
        cantidad: cantidadNum    
      }),
    });



    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Error en addToCart:', error);
    return {
      status: false,
      message: "Error al agregar al carrito, intenta de nuevo",
    };
  }
};

export default addToCart;