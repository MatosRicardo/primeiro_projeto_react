import styles from "../CSS/ComponentesProps.module.css";

function ComponenteProps({lugar, texto, bandeira_pais}){
    return(
        <div className={styles.corpo_props}>
            <h2>Venha conhecer esse lugar incrivel: {lugar}!!!</h2>
            <p>{texto}</p>
            <img src={bandeira_pais} alt="" className={styles.band}/>
        </div>
    )
}

export default ComponenteProps