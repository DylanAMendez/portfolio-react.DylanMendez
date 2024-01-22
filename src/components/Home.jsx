import { VideoBack } from "./VideoBack.jsx"
import { Header } from "./Header"
import { HeroContainer } from "./HeroContainer"
import { AboutMe } from "./AboutMe"
import Skills from "./Skills.jsx"
import Experiencia from "./Experiencia.jsx"
import UltimoProyecto from "./UltimoProyecto.jsx"





const Home = () =>
{

  return (

    <div>
      <VideoBack />
      <Header />


      <HeroContainer />

      <Experiencia />

      <UltimoProyecto />

      <div className="">

        <h2 className="text-white font-normal font-serif text-center sm:text-xl mb-10" id="aboutMe-h2" > Habilidades </h2>

        <div className="  ">
          <Skills />
        </div>

      </div>

      <AboutMe />



    </div>
  )
}

export default Home