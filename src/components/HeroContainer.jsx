import { Link } from "react-router-dom"
import Typing from "./Typing"


export const HeroContainer = () => {
  return (

    <div className=" grid grid-cols-1 gap-4 sm:gap-4 place-content-around sm:h-[400px] h-[64vh] lg:h-[71vh]      md:grid-cols-2 md:align-items-[center] md:justify-items-center " id="heroContainer">
        
        <div className=" mt-28 grid grid-cols-1 ">
        <h1 className=" font-normal text-center text-6xl " id="hero-h1"> Dylan A. Mendez </h1>

        <div className="  flex justify-center   ">
        <Typing />
        </div>

        <div className="">
          
            <div className="flex text-center justify-evenly  text-[#23714D] text-center mt-7 " >
            
            <a href="#" className="  " > <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 512 512"><path fill="#23741d" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg> </a>

            <a href="#" className="   " > 
            <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 448 512"><path fill="#23741d" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
           </a>

            <a href="#" className="  " >
            <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 384 512"><path fill="#23741d" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
              </a>
            </div>
            <div>
           
            </div>
            
        </div>

        </div>

        

        <div className="">
            <h1 className="text-center font-medium font-fontPoppins lg:text-lg" id="hero-text"> ¿Comenzamos a trabajar juntos? </h1>
        </div>

        <div className="text-center">
            
        </div>

        <div className="text-center md:m-[-60px]">
            <button className="content-center">
            <Link to="/contact"><a className="text-center font-fontRoboto " id="hero-button">CONTACTAR</a></Link>
            </button>
        </div>

    </div>

  )
}
