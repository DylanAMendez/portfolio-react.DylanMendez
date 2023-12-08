import { VideoBack } from "./VideoBack.jsx";
import { Header } from "./Header";
import lastProjects from "../datos/lastProjects.js";
import BtnInformation from "./BtnInformation.jsx";

import proyectosPersonales from "../datos/ProyectosPersonales.js";

import morenoAberturasImagenUno from '../assets/images/morenoAberturas-Image-Uno.png';
import morenoAberturasImagenDos from '../assets/images/morenoAberturas-Image-Dos.png';
import morenoAberturasImagenTres from '../assets/images/morenoAberturas-Image-Tres.png';

import proyectoPersonalCalculadora from '../assets/images/dmCalculadora.png';

import proyectoPersonalTodoList from '../assets/images/dmTodoList.png';

// Definir las constantes aquí
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


const proyectosPersonalesComponents = proyectosPersonales.map((personal) =>
{

  const { name, image, description, descriptionUno, descriptionDos, link } = personal;
  
  return { name, image, description, descriptionUno, descriptionDos, link, };

});

export const Projects = () => {
  return (
    <div>
      <VideoBack />
      <Header />

      <div className=" " id="">
        <section id="projects">
          <h2 className="font-normal font-fontPoppins text-center sm:text-xl mt-10" id="aboutMe-h2">
            Ultimo Proyecto
          </h2>

          <p className="mt-10 pb-5 text-[#FFFFFF] text-center m-9 font-bold lg:text-lg font-fontRoboto" id="aboutMe-p">
          Este proyecto fue realizado en colaboración con la empresa <br /> Moreno Aberturas
          </p>

          <div className="sm:grid  lg:grid lg:grid-cols-3  gap-4 items-center mb-6 pb-1">
            {projectComponents.map((project, index) => (
              <div key={index} className="mx-8 text-center my-7 content-center justify-center" id="projects-div">

                <h3 className="text-[#F1CCBA] font-medium font-fontRoboto pb-5 lg:pb-7 lg:mt-3 sm:my-7">Pagina Inicio</h3>
                <img src={morenoAberturasImagenUno} className="inline max-h-60 md:max-h-80 lg:max-h-96" alt={project.name} />
            
              </div>


        
            ))}

                {projectComponents.map((project, index) => (
              <div key={index} className="mx-8 my-7 text-center content-center justify-center" id="projects-div">

                <h3 className="text-[#F1CCBA] font-medium font-fontRoboto pb-5 lg:pb-7 lg:mt-3">Seccion Articulos</h3>
                <img src={morenoAberturasImagenDos} className="inline max-h-44 md:max-h-80 lg:max-h-96" alt={project.name} />
            
              </div>


        
            ))}

                
                    {/* IMAGEN PROJECT 3 */}
            {projectComponents.map((project, index) => (
              <div key={index} className="mx-8 my-7 text-center content-center justify-center" id="projects-div">

                <h3 className="text-[#F1CCBA] font-medium font-fontRoboto pb-5 lg:pb-7 lg:mt-3">Seccion Detalles</h3>
                <img src={morenoAberturasImagenTres} className=" inline max-h-44 md:max-h-80 lg:max-h-96" alt={project.name} />
            
              </div>


        
            ))}

   

          </div>

            
          <div className=" items-center mb-6 pb-1">
  
         <div className=" mx-8 text-center content-center justify-center">

              <BtnInformation />

          </div>

          </div>


          <div className=" items-center mb-6 pb-1">
  
          <div className=" mx-8 text-center content-center justify-center">

          <button className="content-center sm:my-7">
            <a href={projectComponents[0].link} target="_blank" rel="noopener noreferrer" className="text-center font-fontRoboto " id="hero-button">
             Pagina del Proyecto 
            </a>
            </button>

          </div>

          </div>


              {/* ---- */}


          <h2 className="font-normal font-fontPoppins text-center sm:text-xl mt-10" id="aboutMe-h2">
            Proyectos Personales
          </h2>

             <div className=" lg:grid lg:grid-cols-2">
    
            
          {proyectosPersonalesComponents.map((personal, index) => (
            
            <div key={index} className=" mb-5 mx-5 flex justify-center " >

      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex flex-col items-center ">
      <img className="  max-w-xs max-h-80  lg:h-[400px] lg:max-w-lg 2xl:h-[400px] " src={personal.image}  alt="" />

   <div className="p-5 lg:m-5 text-left ">

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> { personal.name } </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 lg:py-5">
           {personal.description} <br />
           {personal.descriptionUno} <br />
           {personal.descriptionDos} <br />
      </p>

      <a href={personal.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#fff] bg-[#495057] rounded-lg focus:ring-blue-300  dark:hover:bg-blue-700 dark:focus:ring-blue-800 " rel="noreferrer"  target="_blank" >
          ver pagina
         
          <svg className="w-[24px] h-[24px] ml-1 text-[#fff] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">

      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>

        </svg>

      </a>


  </div>
</div>

            </div>

            
      
          ))}


          {/* {proyectosPersonalesComponents.map((personal, index) => (
            
            <div key={index} className=" mb-5 mx-5 flex justify-center " >

      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  sm:flex items-center ">
      <img className=" sm:max-w-xs  lg:max-w-lg " src={personal.image}  alt="" />

   <div className="p-5 lg:m-5 text-left ">

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> { personal.name } </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 lg:py-5">
          { personal.description }
      </p>

      <a href={personal.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#fff] bg-[#495057] rounded-lg focus:ring-blue-300  dark:hover:bg-blue-700 dark:focus:ring-blue-800 " rel="noreferrer"  target="_blank" >
          ver pagina
         
          <svg className="w-[24px] h-[24px] ml-1 text-[#fff] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">

      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>

        </svg>

      </a>


  </div>
</div>

            </div>

            
      
          ))} */}
              
          
          

          {/* ----- */}

          </div>

        </section>
      </div>
    </div>
  );
};
