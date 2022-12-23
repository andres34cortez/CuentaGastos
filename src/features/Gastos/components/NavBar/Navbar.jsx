import styles from "./Navbar.module.css";
import {  useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();
  


  return (
    <div className={styles.container} >
      <div className={styles.element}
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        HOME
      </div>
       <div className={styles.element}
        onClick={() => {
          navigate("/login");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
       login
      </div>
       
      
    </div>
  );
}

export default Navbar;