import styles from "../CSS/Home.module.css";

function Home() {
  return (
    <>
      <section className={styles.corpo}>
        <div className={styles.imagem_lado}></div>
        <div className={styles.texto_lado}>
          <h1>Encontre aqui a viagem dos seus sonhos</h1>
          <p>
            No site, os clientes podem realizar o sonho de viajar para o destino
            que sempre desejaram. Com uma ampla variedade de opções, o usuário
            pode escolher a viagem perfeita, seja para explorar novas culturas,
            visitar lugares icônicos ou simplesmente relaxar. O processo é
            simples e intuitivo: o cliente pode pesquisar as melhores ofertas,
            ajustar a viagem ao seu orçamento e, com apenas alguns cliques,
            garantir a passagem para a experiência dos sonhos. Além disso, o
            site oferece suporte completo, assegurando que o cliente aproveite
            cada etapa da jornada com confiança e entusiasmo.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
