
import lastProjects from "../datos/lastProjects.js";
import { Link } from "react-router-dom"
import morenoAberturasImagenTres from '../assets/images/morenoAberturas-Image-Tres.png';

const projectComponents = lastProjects.map((project) => {
    const { name, imageUno, imageDos, imageTres, description, link } = project;
  
    return {
      name,
      imageUno,
      imageDos,
      imageTres,
      description,
      link,
    };
  });

const UltimoProyecto = () => {
  return (
    <div className=" " id="">
        <section className="" id="projects">

          <h2 className="font-normal font-fontPoppins text-center sm:text-xl mt-10" id="aboutMe-h2">
            Ultimo Proyecto
          </h2>

          <article className="  " >


            
            
          {projectComponents.map((project, index) => (
            
              <div key={index} className="" >

        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  sm:flex m-11 lg:mx-36 2xl:mx-96 ">
        <img className=" sm:max-w-xs  lg:max-w-lg " src={morenoAberturasImagenTres}  alt="" />

     <div className="p-5 lg:m-5 text-left ">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Catálogo de Productos </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 lg:py-5">
        Proyecto desarrollado para simplificar la función de mostrar productos y servicios de una manera práctica y accesible. <br /> <br />
        Los usuarios pueden encontrar una amplia selección de productos de aberturas organizadas por linea, modelos, etc. <br /> <br />
        Proyecto utilizando HTML, CSS y JavaScript nativo.
        </p>

        <a href={project.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#fff] bg-[#495057] rounded-lg focus:ring-blue-300  dark:hover:bg-blue-700 dark:focus:ring-blue-800 " rel="noreferrer"  target="_blank" >
            ver pagina
           
            <svg className="w-[24px] h-[24px] ml-1 text-[#fff] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">

        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>

          </svg>

        </a>


    </div>
</div>

              </div>

              
        
            ))}

          </article>

          <div className="text-center lg:mb-10">
            <button className="content-center">
            <Link to="/projects"><a className="text-center font-fontRoboto font-medium " id="hero-button">Ir a Proyectos</a></Link>
            </button>
        </div>


        </section>
      </div>
  )
}

export default UltimoProyecto