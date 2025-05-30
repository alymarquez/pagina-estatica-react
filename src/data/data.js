import manicura from '../assets/manicura.avif'
import semipermanente from '../assets/esmaltado.avif'
import softgel from '../assets/softgel.jpg'
import kapping from '../assets/kapping.jpg'

export default
    [
        {
            nombre:'Manicura',
            tiempo:'Turno de 30 minutos',
            duracion:'5 a 7 días',
            image: manicura,
            incluye:'Limado + cutícula + hidratación con crema y suaves masajes.'
        },
        {   
            nombre:'Esmaltado Semipermanente',
            tiempo:'Turno de 30 minutos',
            duracion:'10 a 14 días',
            image: semipermanente,
            incluye:'Limado + cutícula + esmaltado + hidratación con crema y suaves masajes.'
        },
        {
            nombre:'Kapping',
            tiempo:'Turno de 60 minutos',
            duracion:'14 días',
            image: kapping,
            incluye:'¡Este material es tendencia absoluta! Su éxito radica en que permite que tu uña natural pueda crecer por debajo logrando ¡fortalecerlas! Esmaltado perfecto por mucho más tiempo.'
        },
        {
            nombre:'Soft gel',
            tiempo:'Turno de 90 minutos',
            duracion:'21 días',
            image: softgel,
            incluye:'Un sistema que llegó para revolucionar el mundo de la manicura. Se aplica sobre tu uña natural, brindando un efecto de extensión, con resultados sorprendentes.'
        }
    ]