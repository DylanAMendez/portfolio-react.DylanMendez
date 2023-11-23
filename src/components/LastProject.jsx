
import { Link } from "react-router-dom"

const LastProject = ( { LastProjectsName, LastProjectsImage, LastProjectsDescription, LastProjectsLink, LastProjectsPath  } ) => {
  return (

    
    <div id="aboutMe-container">
        
       

         <h3 className=" text-[#F1CCBA] font-bold lg:text-xl font-fontRoboto pb-5 lg:pb-7 lg:mt-3">{LastProjectsName}</h3>

            <div id="projects-image">
                <img src={LastProjectsImage} className="inline max-h-44 lg:max-h-80 " alt={LastProjectsName}></img>
             </div>
             <button className="content-center my-7">
            <a className="text-center font-fontRoboto " href={LastProjectsLink} rel={LastProjectsLink} target="_blank" id="hero-button" >ver projecto</a>
            </button>
                     <p className="text-white font-normal lg:text-lg font-fontRoboto pt-5 lg:pb-7 " id="aboutMe-p">
                        {LastProjectsDescription}
                      </p>

                      <Link to="/" >
                      <button className="content-center my-10" id="hero-button">
                        <a className="text-center font-fontRoboto " > all proyects </a>
                      </button>
                      </Link>
                
     </div>

  )
}

export default LastProject