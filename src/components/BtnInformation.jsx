

import { useState} from "react";

const BtnInformation = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow (!show);
    };

  return (
    <div className=" text-center font-fontRoboto">
        { show ? <h2 className="bg-[#1c1c1ce0] text-[#fff] font-fontRoboto mb-2 " > 

        <li> Tecnologias utilizadas:  Html, Css y Vanilla JavaScript.</li>
        <li> Creé el proyecto desde 0, comenze diseñandolo y mostrando borradores de una posible pagina que le podria interesar al cliente. </li>
        <li> Creé un catálogo de productos atractivo y organizado, implementé navegación intuitiva para una experiencia de
        usuario mejorada, optimicé el sitio web para una búsqueda eficiente de productos y mejor usabilidad. </li> 
        
         </h2> : "" }
        <button onClick={handleClick} id="button-information" > {show ? "↑ Ocultar Informacion ↑" : "» Mas Información «" }  </button>
    </div>
  )


}

export default BtnInformation
