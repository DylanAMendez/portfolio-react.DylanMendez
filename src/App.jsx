import { Projects } from "./components/Projects.jsx"
import { Services } from "./components/Services"
import { Route, Routes } from 'react-router-dom';
import  Home  from "./components/Home.jsx"
import Contact from "./components/Contact.jsx"



function App() {




  return (

    <main className="px-0 pt-0 m-[0px] w-[100%]">

      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      </Routes>

      <Contact />


      {/* footer */}

      <footer className=" right-0 left-0 m-auto  flex w-fit justify-self-center text-center text-white ">Created by
      <a className="text-[#309c6a] px-2   duration-200 ease-in hover:border-orange-400 hover:text-[#F1CCBA] " href="https://www.linkedin.com/in/dylanmendez/" rel="noreferrer" target="_blank" > Dylan A. Mendez </a>  | © { new Date().getFullYear() } 
      </footer>

    
    </main>

  )
}

export default App
