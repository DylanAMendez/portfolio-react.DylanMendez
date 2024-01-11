
import muroDeFirmas from '../assets/images/MuroDeFirmas-viewMobile.png'
import binaryAppImg from '../assets/images/binary-app_desktop.png'
import lofiRainImg from '../assets/images/LofiRain_Desktop.png'


const personalProjects = [

    {
        name: "Muro de Firmas",
        image: muroDeFirmas,
        description: "Proyecto desarrollado con React y Firebase.",
        descriptionUno: "Permite a los usuarios dejar su firma y una descripción personal que quedan almacenadas en la base de datos.",
        descriptionDos: "Utilice React-Toastify para notificaciones, TailwindCSS para estilos.",
        descriptionTres: "Hooks de React: useState y useEffect para gestionar el estado y efectos.",
        descriptionCuatro: "Los visitantes pueden ver las firmas dejadas por otros usuarios al acceder al muro.",
        link: "https://muro-de-firmas.vercel.app/",
    },

    {
        name: "Lofi Rain",
        image: lofiRainImg,
        description: "Una aplicación relajante que ofrece una experiencia inmersiva con música lofi rain y un fondo de lluvia animado.",
        descriptionUno: "Controla fácilmente la música y reinicia la pista con un solo clic para mantener la experiencia sin interrupciones.",
        descriptionDos: "",
        descriptionTres: "Desarrollada con React, HTML y CSS para una interfaz de usuario interactiva y amigable.",
        descriptionCuatro: "",
        link: "https://lofi-rain.vercel.app/",
    },

    {
        name: "Binary App",
        image: binaryAppImg,
        description: "Los usuarios pueden convertir números de formato decimal a binario y viceversa.",
        descriptionUno: "Herramienta educativa y práctica para estudiantes, educadores y profesionales interesados en la informática y matemáticas.",
        descriptionDos: "",
        descriptionTres: "Utiliza hooks de React como useState para gestionar el estado de las entradas y las conversiones",
        descriptionCuatro: "Actualiza los resultados de la conversión en tiempo real, mejorando la experiencia del usuario.",
        link: "https://binary-app.vercel.app/",
    },




]

export default personalProjects