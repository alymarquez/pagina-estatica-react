import { useEffect, useState } from 'react';
import styles from '../Carrousel/Carrousel.module.css';

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className={styles.carousel}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.content}>
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
            {slide.link && (
              <a href={slide.link} className={styles.btn}>
                Ver más
              </a>
            )}
          </div>
        </div>
      ))}
      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
      <button className={styles.next} onClick={nextSlide}>&#10095;</button>
    </section>
  );
}
