import Logo from "../assets/imagens/viagens.jpg";
import Lupa from "../assets/imagens/lupa.png";
import styles from "../CSS/Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.content}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <nav className={styles.menu}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Escócia</a>
            </li>
            <li>
              <a href="#">Grand Canyon</a>
            </li>
            <li>
              <a href="#">Muralhas da China</a>
            </li>
            <li>
              <a href="#">Aruba</a>
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
