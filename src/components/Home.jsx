import { VideoBack } from "./VideoBack.jsx"
import { Header } from "./Header"
import { HeroContainer } from "./HeroContainer"
import { AboutMe } from "./AboutMe"
import Skills from "./Skills.jsx"
import Experiencia from "./Experiencia.jsx"
import UltimoProyecto from "./UltimoProyecto.jsx"





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

      <h2 className="text-white font-normal font-serif text-center sm:text-xl mb-10" id="aboutMe-h2" > Habilidades </h2>
     
      <div className="  ">
      <Skills />
      </div>
      
      </div>

      

    </div>
  )
}

export default Home