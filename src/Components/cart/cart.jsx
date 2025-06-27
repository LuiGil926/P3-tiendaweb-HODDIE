import styles from "./cart.module.css";
import { useContext, useState, useEffect } from "react";
import getCart from "../../hooks/getcart";
import addToCart from "../../hooks/addtocart";
import deleteProductCart from "../../hooks/deleteproductcart";
import { LoginStatusContext } from "../../context/loginstatu.jsx";

function Cart() {
  const { loginStatus } = useContext(LoginStatusContext);
  const [carrito, setCarrito] = useState([]);
  const [cargando, setCargando] = useState(true);

  const agregarAlCarrito = async (id, producto_id, cantidad) => {
    const newcarrito = carrito.map((producto) => {
      if (producto.producto_id === producto_id) {
        return {
          ...producto,
          cantidad: producto.cantidad + cantidad,
        };
      }
      return producto;
    });

    setCarrito(newcarrito);

    try {
      await addToCart(id, producto_id, cantidad);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarAlCarrito = async (carrito_id, producto_id) => {
    const newcarrito = carrito
      .map((producto) => {
        if (producto.producto_id === producto_id) {
          if (producto.cantidad > 1) {
            return {
              ...producto,
              cantidad: producto.cantidad - 1,
            };
          } else {
            return null;
          }
        }
        return producto;
      })
      .filter(Boolean);

    setCarrito(newcarrito);

    try {
      await deleteProductCart(carrito_id, producto_id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setCargando(true);
      try {
        const data = await getCart(loginStatus.id);
        setCarrito(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setCargando(false), 1000);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      {cargando ? (
        <p className={styles.loading}>Cargando...</p>
      ) : (
        <>
          <h1 className={styles.title}>Carrito</h1>

          <section className={styles.carrito_section}>
            <ul className={styles.carrito}>
              {carrito.map((producto) => (
                <li
                  className={styles.carrito_producto}
                  key={producto.producto_id}
                >
                  <div className={styles.carrito_img}>
                    <img src={producto.imagen_url} alt={producto.nombre} />
                  </div>
                  <div className={styles.carrito_info}>
                    <h3>{producto.nombre}</h3>
                    <div className={styles.carrito_info_precio}>
                      <p>
                        Precio: <b>{producto.precio}</b>
                      </p>
                      <p>
                        Cantidad: <b>{producto.cantidad}</b>
                      </p>
                    </div>
                  </div>
                  <div className={styles.carrito_botones}>
                    <button
                      onClick={() =>
                        agregarAlCarrito(
                          loginStatus.id,
                          producto.producto_id,
                          1
                        )
                      }
                    >
                      Agregar
                    </button>
                    <button
                      onClick={() =>
                        eliminarAlCarrito(loginStatus.id, producto.producto_id)
                      }
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <footer className={styles.footer}>
            <button>Finalizar pedido</button>
            <p>
              Total:{" "}
              {new Intl.NumberFormat("es-DO", {
                style: "currency",
                currency: "DOP",
              }).format(
                carrito.reduce(
                  (total, producto) =>
                    total + producto.precio * producto.cantidad,
                  0
                )
              )}
            </p>
          </footer>
        </>
      )}
    </main>
  );
}

export default Cart;
