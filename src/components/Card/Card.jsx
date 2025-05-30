import styles from '../Card/Card.module.css';

export function Card({ data }) {
  return (
    <section className={styles.cardContainer}>
      {data.map((item, index) => (
        <article key={index} className={styles.card}>
          <img
            src={item.image}
            alt={item.nombre}
            className={styles.cardImage}
          />
          <h3>{item.nombre}</h3>
          <div className={styles.cardText}>
            <p><strong>Turno:</strong> {item.tiempo}</p>
            <p><strong>Duración:</strong> {item.duracion}</p>
            <p className={styles.incluye}><strong>Incluye:</strong> {item.incluye}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
