import { VideoBack } from "./VideoBack.jsx";
import { Header } from "./Header";
import lastProjects from "../datos/lastProjects.js";
import BtnInformation from "./BtnInformation.jsx";

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

export const Projects = () => {
  return (
    <div>
      <VideoBack />
      <Header />

      <div className=" " id="aboutMe-container">
        <section id="projects">
          <h2 className="font-normal font-fontPoppins text-center sm:text-xl mt-10" id="aboutMe-h2">
            Last Project
          </h2>

          <p className="mt-10 pb-5 text-[#FFFFFF] text-center m-9 font-bold lg:text-lg font-fontRoboto" id="aboutMe-p">
          Este proyecto fue realizado en colaboración con la empresa <br /> Moreno Aberturas
          </p>

          <div className="sm:grid  lg:grid lg:grid-cols-3  gap-4 items-center mb-6 pb-1">
            {projectComponents.map((project, index) => (
              <div key={index} className="mx-8 text-center my-7 content-center justify-center" id="projects-div">

                <h3 className="text-[#F1CCBA] font-medium font-fontRoboto pb-5 lg:pb-7 lg:mt-3 sm:my-7">Pagina Inicio</h3>
                <img src={project.imageUno} className="inline max-h-60 md:max-h-80 lg:max-h-96" alt={project.name} />
            
              </div>


        
            ))}

                {projectComponents.map((project, index) => (
              <div key={index} className="mx-8 my-7 text-center content-center justify-center" id="projects-div">

                <h3 className="text-[#F1CCBA] font-medium font-fontRoboto pb-5 lg:pb-7 lg:mt-3">Seccion Articulos</h3>
                <img src={project.imageDos} className="inline max-h-44 md:max-h-80 lg:max-h-96" alt={project.name} />
            
              </div>


        
            ))}

                
                    {/* IMAGEN PROJECT 3 */}
            {projectComponents.map((project, index) => (
              <div key={index} className="mx-8 my-7 text-center content-center justify-center" id="projects-div">

                <h3 className="text-[#F1CCBA] font-medium font-fontRoboto pb-5 lg:pb-7 lg:mt-3">Seccion Detalles</h3>
                <img src={project.imageTres} className=" inline max-h-44 md:max-h-80 lg:max-h-96" alt={project.name} />
            
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


        </section>
      </div>
    </div>
  );
};
