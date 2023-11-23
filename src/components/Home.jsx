import { VideoBack } from "./VideoBack.jsx"
import { Header } from "./Header"
import { HeroContainer } from "./HeroContainer"
import { AboutMe } from "./AboutMe"
import  skills  from "../datos/skills.js"


const skillsList = skills.map( s => { 

    return <skills nameSkill={s.name} description={s.description} imageSkill={s.image} />

   } );


const Home = () => {

  return (
    
    <div>
    <VideoBack />
      <Header />


      <HeroContainer />
      
      <AboutMe />

      {/* ---Projects---- */}

      <h2 className="font-normal font-fontPoppins text-center sm:text-xl mt-10" id="aboutMe-h2" >Last Project</h2>

      {/* ---Skills---  */}
     
     {/* ---Skills---  */}
     <div className="bg-[#1c1c1ce0]">
      <h2 className="text-white font-normal font-serif text-center sm:text-xl mb-10" id="aboutMe-h2" > Skills </h2>
     
      <div className="  pb-5 mx-7 grid grid-cols-3 gap-7 items-center lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 lg:items-center mb-6 ">
      {skillsList}
      </div>
      
      </div>

      <div className=" mt-10 mx-10 text-center justify-center gap-4 grid lg:flex lg:flex-wrap">
        
      </div>

    </div>
  )
}

export default Home