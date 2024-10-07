import styles from "../CSS/Footer.module.css";
import insta from "../assets/imagens/insta.jpeg";
import face from "../assets/imagens/face.jpeg";
import tiktok from "../assets/imagens/tiktok.png";
import whatsapp from "../assets/imagens/whtas.png";

function Footer() {
  return (
    <>
      <footer className={styles.corpo_rodape}>
        <h3>Siga-nos nas redes sociais</h3>
        <div className={styles.icones}>
          <img src={insta} alt="Instagram" />
          <img src={face} alt="Facebook" />
          <img src={tiktok} alt="Tiktok" />
          <img src={whatsapp} alt="Whatsapp" />
        </div>
        <h3>Telefone de Contato (11) 4442-8922</h3>
      </footer>
    </>
  );
}

export default Footer;
