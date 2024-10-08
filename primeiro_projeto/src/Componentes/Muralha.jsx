import styles from "../CSS/Muralha.module.css";
import ComponenteProps from "../Componentes/ComponenteProps";
import bandeira from "../assets/imagens/bandeira_china.jfif";

function Muralha() {
  return (
    <>
    <div className={styles.fundo3}>
    <ComponenteProps 
        lugar = 'China'
        texto = 'A China é um país de rica história e cultura, e a Grande Muralha é seu símbolo mais icônico. Com mais de 21 mil quilômetros, a muralha foi construída ao longo dos séculos para proteger as dinastias chinesas de invasões. As seções mais famosas, como Badaling e Mutianyu, oferecem vistas deslumbrantes e atraem milhões de visitantes anualmente. Mais do que uma impressionante obra de engenharia, a Muralha é um testemunho da herança cultural da China, onde cada pedra conta a história de uma nação milenar. É, sem dúvida, um dos maiores tesouros do mundo.'  
        bandeira_pais = {bandeira}    
      />
    </div>
    </>
  );
}

export default Muralha;
