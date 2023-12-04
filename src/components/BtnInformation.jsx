

import { useState} from "react";

const BtnInformation = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow (!show);
    };

  return (
    <div className=" text-center font-fontRoboto">
        { show ? <h2 className=" text-[#fff] font-fontRoboto mb-2 " id="aboutMe-container" > 

        <li> Proyecto desarrollado para simplificar la función de mostrar productos y servicios de una manera práctica y accesible.</li>
        <li> Los usuarios pueden encontrar una amplia selección de productos de aberturas organizadas por linea, modelos, etc. </li>
        <li> Tecnologias utilizadas: HTML, CSS y JavaScript nativo. </li> 
        
         </h2> : "" }
        <button onClick={handleClick} id="button-information" > {show ? "↑ Ocultar Informacion ↑" : "» Mas Información «" }  </button>
    </div>
  )


}

export default BtnInformation
