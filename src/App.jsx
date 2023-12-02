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

    
    </main>

  )
}

export default App
