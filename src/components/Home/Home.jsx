import { Link,useNavigate} from "react-router-dom";
import { auth } from "../../firebase";
import styles from "./home.module.css"
function salir(){
  return auth.signOut();
  navigate("/");
}
export function Home(props) {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div>
          <h1 className={styles.heading}>
            <Link to="/login">Login</Link>
          </h1>
          <br />
          <h1>
            <Link to="/singup">SingUp</Link>
          </h1>
        </div>
      </div>
      <h2 className={styles.heading}>{props.name?`Bienvenido - ${props.name}`:"Inicie Sesion porfavor"}</h2>
      <button className={styles.skip}onClick={salir}>Salir</button>
    </div>
  );
}
