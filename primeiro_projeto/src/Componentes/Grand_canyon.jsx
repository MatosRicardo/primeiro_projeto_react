import styles from "../CSS/Grand_canyon.module.css";
import ComponenteProps from "../Componentes/ComponenteProps";
import bandeira from "../assets/imagens/bandeira_eua.jfif";

function Grand_Canyon() {
  return (
    <>
    <div className={styles.fundo1}>
    <ComponenteProps 
        lugar = 'Grand Canyon (EUA)'
        texto = 'Os Estados Unidos são um país de paisagens impressionantes, e o Grand Canyon, no Arizona, é uma de suas joias mais notáveis. Com mais de 450 quilômetros de extensão e profundidades de até 1.800 metros, suas paredes íngremes exibem uma paleta de cores vibrantes que mudam ao longo do dia. Os visitantes podem explorar trilhas desafiadoras, como o Bright Angel Trail, ou admirar vistas deslumbrantes em mirantes como o Mather Point. Além de sua beleza natural, o Grand Canyon tem grande significado cultural, sendo considerado sagrado por diversas tribos nativas americanas. É um destino que combina aventura e reverência à natureza, simbolizando a grandeza dos Estados Unidos.'  
        bandeira_pais = {bandeira}    
      />
    </div>
    </>
  );
}

export default Grand_Canyon;
