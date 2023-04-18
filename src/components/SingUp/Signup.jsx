import styles from "./singup.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "../InputControl/InputControl";
export function Singup() {
  const navigate = useNavigate();
  const [values, setvalues] = useState({ name: "", email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const registro = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisable(false);
        const user = res.user;
        await updateProfile(user, { displayName: values.name });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Registro</h1>
        <InputControl
          label="Name"
          placeholder="Ingrese un nombre"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Ingrese un correo"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Contraseña"
          placeholder="Ingrese una contraseña"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={registro} disable={submitButtonDisable}>Guardar</button>
          <p>
            Si ya tienes una cuenta ,inicia sesion
            <span>
                <Link to="/login"> Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
