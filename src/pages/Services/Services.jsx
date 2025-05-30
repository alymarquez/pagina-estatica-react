// servicios - Qué ofrece el negocio (ej: menú, servicios, especialidades)
import styles from './Services.module.css';
import { Card } from '../../components/Card/Card'
import data from '../../data/data'

export function Services() {
  return (
    <section id={styles.services}>
      <h2>Servicios</h2>
        <Card data={data} />
    </section>
  )
}
