import styles from "../CSS/Escocia.module.css";
import ComponenteProps from "../Componentes/ComponenteProps";
import bandeira from "../assets/imagens/bandeira_escocia.png";

function Escocia() {
  return (
    <>
    <div className={styles.fundo}>
      <ComponenteProps 
        lugar = 'Escócia'
        texto = 'A Escócia é um país repleto de maravilhas naturais e culturais que encantam a todos que a visitam. Desde as imponentes Highlands, com suas montanhas majestosas e lagos serenos, até as charmosas cidades como Edimburgo e Glasgow, cada canto oferece uma experiência única. Os castelos históricos, como o icônico Castelo de Edimburgo, contam histórias de um passado rico e intrigante. A costa escocesa, com suas dramáticas falésias e praias isoladas, é um convite à exploração. Além disso, a cultura vibrante, marcada por música tradicional, danças e festas como o famoso Highland Games, revela a alma calorosa do povo escocês. Com sua beleza deslumbrante e herança cultural rica, a Escócia é verdadeiramente um destino que fascina e inspira.'  
        bandeira_pais = {bandeira}    
      />
    </div>
    </>
  );
}

export default Escocia;
