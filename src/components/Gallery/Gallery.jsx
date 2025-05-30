import { Link } from 'react-router-dom';
import styles from './Gallery.module.css';

export function Gallery({ items }) {
  return (
    <section className={styles.gallery}>
      {items.map((item, index) => (
        <Link to="/services" key={index} className={styles.card}>
          <img src={item.image} alt={item.title} className={styles.image} />
          <h3 className={styles.title}>{item.title}</h3>
        </Link>
      ))}
    </section>
  );
}
