import styles from "./perfil.module.css";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginStatusContext } from "../../context/loginstatu.jsx";

function Perfil() {
    const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { loginStatus, setLoginStatus } = useContext(LoginStatusContext);

  const onClick = () => {
      navigate("/login", {state: {close: true}});
    };

  return (
    <main className={styles.main_perfil}>
      <div>
        <h2>
          <b>Perfil:</b> {loginStatus.nombre}
        </h2>
        <p className={styles.email}>
          <b>Email:</b> {loginStatus.user}
        </p>
        <p className={styles.id}>
          <b>ID:</b> {loginStatus.id}
        </p>

        {visible ? (<article className={styles.modal_container}>
          <div className={styles.modal}>
            <p>
              {loginStatus.nombre}, ¿Estás seguro de que quieres cerrar sesión?
            </p>
            <button className={styles.si} onClick={() => onClick() && setVisible(!visible)}>
              Si
            </button>
            <button className={styles.no} onClick={() => setVisible(!visible)}>
              No
            </button>
          </div>
        </article>) : null}

        <button
          className={styles.boton_close}
          onClick={() => setVisible(!visible)}
        >
          Cerrar sesión
        </button>
      </div>
    </main>
  );
}

export default Perfil;
