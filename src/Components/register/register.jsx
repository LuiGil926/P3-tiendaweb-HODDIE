import styles from "./register.module.css";

import register from "../../hooks/register";
import createCart from "../../hooks/createcart";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const [mensage, setMensage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showmensage, setShowMensage] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.passwordRepeat) {
      setMensage("Las contraseñas no coinciden");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await register(form.username, form.email, form.password);
      if (res.status === true) {
        await createCart(res.user);
        setMensage(res);
        console.log(res);
        // setTimeout(navigate("/login"), 1000);
      } else {
        setMensage(res);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setShowMensage(true);
      setTimeout(() => {
        setShowMensage(false);
      }, 2000);
    }
  };

  return (
    <div className={styles.container}>

      <div className={styles.blurBg}></div>
      <form className={styles.form} onSubmit={handleSubmit}>

      {showmensage ? (
        mensage.status ? (
          <div className={styles.success}>{mensage.message}</div>
        ) : (
          <div className={styles.error}>{mensage.message}</div>
        )
      ) : null}
        <h2 className={styles.title}>Registro</h2>

        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          className={styles.input}
          type="password"
          name="passwordRepeat"
          placeholder="Repetir contraseña"
          value={form.passwordRepeat}
          onChange={handleChange}
          required
        />

        <button className={styles.button} type="submit">
          Registrarse
        </button>

        <p className={styles.footer}>
          ya tengo cuenta <Link to={"/login"}>Iniciar sesión</Link>
        </p>
      </form>
    </div>
  );
}
