import Logo from "../assets/imagens/viagens.jpg";
import Lupa from "../assets/imagens/lupa.png";
import styles from "../CSS/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className={styles.content}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Escocia">Escocia</Link>
            </li>
            <li>
              <Link to="/Grand_Canyon">Grand Canyon</Link>
            </li>
            <li>
              <Link to="/Muralha">Muralha</Link>
            </li>
            <li>
              <Link to="/Aruba">Aruba</Link>
            </li>
          </ul>
        </nav>
        <div>
          <input type="search" className={styles.login} />
        </div>

        <img src={Lupa} alt="Lupa" className={styles.lupa} />
      </header>
    </>
  );
}

export default Header;
