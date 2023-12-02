import { VideoBack } from "./VideoBack.jsx"
import { Header } from "./Header"
import { HeroContainer } from "./HeroContainer"
import { AboutMe } from "./AboutMe"
import  skills  from "../datos/skills.js"
import Skills from "./Skills.jsx"
import Experiencia from "./Experiencia.jsx"
import UltimoProyecto from "./UltimoProyecto.jsx"
import Contact from "./Contact.jsx"




const Home = () => {

  return (
    
    <div>
    <VideoBack />
      <Header />


      <HeroContainer />
      
      <AboutMe />


      <Experiencia />

      <UltimoProyecto />



      {/* ---Projects---- */}

      {/* <h2 className="font-normal font-fontPoppins text-center sm:text-xl mt-10" id="aboutMe-h2" >Last Project</h2> */}

      {/* ---Skills---  */}
     
     {/* ---Skills---  */}
     <div className="">

      <h2 className="text-white font-normal font-serif text-center sm:text-xl mb-10" id="aboutMe-h2" > Skills </h2>
     
      <div className="  ">
      <Skills />
      </div>
      
      </div>

      <Contact />


      {/* footer */}

      <footer className=" right-0 left-0 m-auto  flex w-fit justify-self-center text-center text-white ">Created by
      <a className="text-[#1c1e] px-2   duration-200 ease-in hover:border-orange-400 hover:text-orange-400" href=""> Dylan A. Mendez </a>  | © { new Date().getFullYear() } 
      </footer>

    </div>
  )
}

export default Home