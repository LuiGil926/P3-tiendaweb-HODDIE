import styles from "./login.module.css";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { LoginStatusContext } from "../../context/loginstatu.jsx";
import login from "../../hooks/login";

function Login() {
    const navegacion = useNavigate();
    const location = useLocation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { loginStatus, setLoginStatus } = useContext(LoginStatusContext);
  const [showmensage, setShowMensage] = useState(false);


  useEffect(() => {
    if (location.state?.close) {
      setLoginStatus({status: false, message: "", user: null});
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.email === "" || credentials.password === "") {
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await login(credentials.email, credentials.password);

    if (res.status === true) {
        setLoginStatus(res);
        
        setTimeout(() => {navegacion("/")}, 1000);

    } else {
        setLoginStatus(res);
    }

    } catch (error) {
      console.error(error);
    } finally {

        setShowMensage(true);
        
        setTimeout(()=>{
            setShowMensage(false);
        }, 2000)
        setIsSubmitting(false);
    }
  };

  

  return (
    <div className={styles.container}>
      <div className={styles.blurBg}></div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Iniciar Sesión</h2>

        {showmensage ? (
            loginStatus.status ? (
              <div className={styles.success}>{loginStatus.message}</div>
            ) : (
              <div className={styles.error}>{loginStatus.message}</div>
            )
        ) : null}

        <input
          type="email"
          placeholder="Correo electrónico"
          className={styles.input}
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Contraseña"
          className={styles.input}
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button type="submit" className={styles.button}>
          {isSubmitting ? "Iniciando sesión..." : "Entrar"}
        </button>
        <p className={styles.footer}>
          ¿No tienes cuenta? <Link to={"/registro"}>Registrate</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
