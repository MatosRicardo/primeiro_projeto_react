import styles from "../CSS/Aruba.module.css";
import ComponenteProps from "../Componentes/ComponenteProps";
import bandeira from "../assets/imagens/bandeira_aruba.jfif";

function Aruba() {
  return (
    <>
    <div className={styles.fundo3}>
    <ComponenteProps 
        lugar = 'Aruba'
        texto = 'Aruba é uma ilha paradisíaca no Caribe, famosa por suas praias de areia branca e águas cristalinas. Com clima ensolarado o ano todo, é ideal para relaxar e praticar esportes aquáticos. A cultura local, uma mistura de influências indígenas, africanas e europeias, se reflete na música e na culinária. A hospitalidade dos arubanos torna a ilha ainda mais acolhedora. Além das belezas naturais, o Parque Nacional Arikok oferece oportunidades para explorar a fauna e flora locais. Aruba é, sem dúvida, um verdadeiro paraíso no Caribe.'  
        bandeira_pais = {bandeira}    
      />
    </div>
    </>
  );
}

export default Aruba;
