import { VideoBack } from "./VideoBack.jsx";
import { Header } from "./Header";
import lastProjects from "../datos/lastProjects.js";

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
          Este proyecto fue realizado en colaboración con la empresa Moreno Aberturas
          </p>

          <div className="lg:grid grid-cols-3 grid-rows-1 gap-4 items-center mb-6 pb-1">
            {projectComponents.map((project, index) => (
              <div key={index} className="mx-8 text-center content-center justify-center" id="services-img">

                <h3 className="text-[#F1CCBA] font-medium font-fontRoboto pb-5 lg:pb-7 lg:mt-3">Image 1</h3>
                <img src={project.imageUno} className="inline max-h-44 lg:max-h-96" alt={project.name} />
            
              </div>


        
            ))}

                {projectComponents.map((project, index) => (
              <div key={index} className="mx-8 text-center content-center justify-center" id="services-img">

                <h3 className="text-[#F1CCBA] font-medium font-fontRoboto pb-5 lg:pb-7 lg:mt-3">Image 2</h3>
                <img src={project.imageDos} className="inline max-h-44 lg:max-h-96" alt={project.name} />
            
              </div>


        
            ))}

                
                    {/* IMAGEN PROJECT 3 */}
            {projectComponents.map((project, index) => (
              <div key={index} className="mx-8 text-center content-center justify-center" id="services-img">

                <h3 className="text-[#F1CCBA] font-medium font-fontRoboto pb-5 lg:pb-7 lg:mt-3">Image 3</h3>
                <img src={project.imageTres} className=" inline max-h-44 lg:max-h-96" alt={project.name} />
            
              </div>


        
            ))}

            <div className=" mx-8 text-center content-center justify-center " id="projects-div-hidden">
            <a className="">
              View Project
            </a>
          </div>

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
