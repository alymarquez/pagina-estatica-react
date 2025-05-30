// contacto - Formulario, WhatsApp, email, dirección, redes
import styles from '../Contact/Contact.module.css';

export function Contact(){
    return <>
        <section id={styles.contact}>
        <h2>Contacto</h2>
        <form action="mailto:salonglownails@ficticio.com" method="post" encType="text/plain">
            <input type="text" name="name" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu email" required />
            <textarea name="message" placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar</button>
        </form>
        <p>O escribinos por <a href="https://wa.me/5491130608503?text=Hola!%20Quisiera%20más%20info%20sobre%20las%20uñas" target="_blank">WhatsApp</a></p>
        </section>
    </>
}
