// inicio - Frase impactante, foto grande
import styles from './Home.module.css';
import { Carousel } from '../../components/Carrousel/Carrousel';
import { Gallery } from '../../components/Gallery/Gallery';
import kapping from '../../assets/kapping.jpg'
import softgel from '../../assets/softgel.jpg'
import manicura from '../../assets/manicura.avif'
import esmaltado from '../../assets/esmaltado.avif'

const slides = [
  {
    image: '/images/slide2.avif',
    title: 'Bienvenidos a Glow Nails',
    text: 'Donde cada uña es una obra de arte',
  },
  {
    image: '/images/slide8.webp',
    title: 'Servicios',
    text: 'Descubrí los servicios que brindamos para tus uñas',
    link: '/services',
  },
  {
    image: '/images/slide7.webp',
    title: 'Contactanos',
    text: 'Escribinos para reservar tu turno',
    link: '/contact',
  },
];

const galleryItems = [
  { image: manicura, title: 'Manicura Clásica' },
  { image: esmaltado, title: 'Esmaltado Semipermanente' },
  { image: kapping, title: 'Kapping' },
  { image: softgel, title: 'Soft Gel' },
];


export function Home() {
  return <>
      <Carousel slides={slides} />
      <section id={styles.home}>
        <h2>Nuestros servicios</h2>
          <Gallery items={galleryItems} />
      </section>
      
  </>
}
