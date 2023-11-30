import { Projects } from "./components/Projects.jsx"
import { Services } from "./components/Services"
// import { Skills } from "./components/Skills"

// import  skills  from "./datos/skills.js"
import projects from "./datos/projects.js"

import { Route, Routes } from 'react-router-dom';
import  Home  from "./components/Home.jsx"
import Contact from "./components/Contact.jsx"



function App() {






  // const skillsList = skills.map( s => { 

  //   return <Skills nameSkill={s.name} description={s.description} imageSkill={s.image} />

  //  } );


  return (

    <main className="px-0 pt-0 m-[0px] w-[100%]">

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      {/* ---Projects---- */}
{/* 
      <h2 className="font-normal font-fontPoppins text-center sm:text-xl mt-10" id="aboutMe-h2" >Last Project</h2>

      <div className=" mt-10 mx-10 text-center justify-center gap-4 grid lg:flex lg:flex-wrap">
        {lastProjectList}
      </div> */}

      <div>


        


      </div>

      {/* ---Footer--- */}

      <footer className=" block  ">
        <div className="">
          <p className="text-center">Created by <b>Dylan A. Mendez</b> | © { new Date().getFullYear() } </p>
        </div>
      </footer>
    
    </main>

  )
}

export default App
