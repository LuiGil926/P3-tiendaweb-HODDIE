import styles from "./productos.module.css";

import { useState, useEffect, useContext } from "react";
import addToCart from "../../hooks/addtocart";
import { LoginStatusContext } from "../../context/loginstatu.jsx";
import obtenerProductos from "../../hooks/productos";

function Productos() {
  const [productos, setProductos] = useState([]);
  const { loginStatus } = useContext(LoginStatusContext);
  const [vermas, setVermas] = useState(10);
  const [filtros, setFiltros] = useState({
    busqueda: "",
    categoria: "todas",
    precio: 0,
  });


  const agregarAlCarrito = async (id, producto_id, cantidad) => {
    try {
      console.log(id, producto_id, cantidad);
      const res =await addToCart(id, producto_id, cantidad);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const res = await obtenerProductos();
        setProductos(res);
      } catch (error) {
        console.error("Error al cargar productos:", error);
        setProductos([]);
      }

    };
    
    cargarProductos();
  }, []);
  
  const vermasproductos = () => {
    if((productos.length - vermas) < 10){
      setVermas(productos.length);
    }else{
      setVermas(vermas + 10);
    }
;
  };

  const filtrodeproductos = (productos) => {
    return productos.filter((producto) => {
      const busqueda = producto.nombre
        .toLowerCase()
        .includes(filtros.busqueda.toLowerCase());
      const categoria =
        filtros.categoria === "todas"
          ? true
          : producto.categoria === filtros.categoria;
      const precio = producto.precio > filtros.precio;
      return busqueda && categoria && precio;
    });
  };


  return (
    <main className={styles.main_productos}>
      <h1>Productos</h1>
      <section className={styles.productos_filtros}>
        <div>
          <label htmlFor="busqueda">
            <p>Buscar productos</p>
          </label>
          <input
            type="text"
            placeholder="Buscar productos"
            value={filtros.busqueda}
            onChange={(e) =>
              setFiltros({ ...filtros, busqueda: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="categoria">
            <p>Categoria </p>
          </label>
          <select
            value={filtros.categoria}
            onChange={(e) =>
              setFiltros({ ...filtros, categoria: e.target.value })
            }
          >
            <option value="todas">Todas</option>
            <option value="men">Men</option>
            <option value="mujer">Mujer</option>
            <option value="bebe">Bebe</option>
            <option value="bebe">Bebe</option>
          </select>
        </div>

        <div className={styles.precio}>
          <label htmlFor="precio">Precio: </label>
          <input
            type="range"
            placeholder="Precio"
            min={0}
            max={2000}
            value={filtros.precio}
            onChange={(e) =>
              setFiltros({ ...filtros, precio: Number(e.target.value) })
            }
          />
          <p>{filtros.precio} - 2000 $</p>
        </div>
        <button
          onClick={() =>
            setFiltros({ busqueda: "", categoria: "todas", precio: 0 })
          }
        >
          Eliminar flitros
        </button>
      </section>

      <section className={styles.productos_lista}>
        {filtrodeproductos(productos)
          .slice(0, vermas)
          .map((producto) => (
            <article key={producto.id} className={styles.producto}>
              <div className={styles.producto_img}>
                <img
                  src={producto.imagen_url}
                  alt={producto.nombre}
                  loading="eager"
                />
              </div>
              <div className={styles.producto_info}>
                <h2 title={producto.nombre}>{producto.nombre}</h2>
                <p>{producto.precio} $</p>
                <button onClick={() => agregarAlCarrito(loginStatus.id, producto.id, 1)}>Agregar al carrito</button>
              </div>
            </article>
          ))}
      </section>

      <div className={styles.boton_vermas}>
        <button  onClick={vermasproductos}>Ver mas</button>
      </div>
    </main>
  );
}
export default Productos;
