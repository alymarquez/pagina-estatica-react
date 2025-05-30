import { Link } from 'react-router-dom'
import logo from '/src/assets/logo3.jpg'
import styles from '../Header/Header.module.css';

export function Header() {
  return <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <img src={logo} alt="Logo Glow Nails" className={styles.logo} />
            </div>
            <ul className={styles['nav-links']}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Quiénes Somos</Link></li>
                <li><Link to="/services">Servicios</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    </header>
  </>
}
