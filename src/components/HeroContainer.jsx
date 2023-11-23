import { Link } from "react-router-dom"


export const HeroContainer = () => {
  return (

    <div className=" grid grid-cols-1 gap-4 sm:gap-4 place-content-around sm:h-[400px] h-[64vh] lg:h-[71vh] " id="heroContainer">
        
        <div className=" text-lg">
            <h1 className="text-white font-normal font-fontPoppins text-center text-xl" id="hero-h1"> Dylan A. Mendez </h1>
        </div>

        <div className="">
            <p className="text-center font-medium font-fontPoppins lg:text-lg" id="hero-text"> ¿Comenzamos a trabajar juntos? </p>
        </div>

        <div className="text-center">
            <button className="content-center">
            <Link to="/contact"><a className="text-center font-fontRoboto " id="hero-button">CONTACTAR</a></Link>
            </button>
        </div>

    </div>

  )
}
