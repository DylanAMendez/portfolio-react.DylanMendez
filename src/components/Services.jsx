import { VideoBack } from "./VideoBack.jsx"
import { Header } from "./Header"

export const Services = () => {
  return (


    <div>

<VideoBack />
      <Header />

<div className=" " id="aboutMe-container" >

<section id="section">

        <h2 className=" font-normal font-fontPoppins text-center sm:text-xl mt-10" id="aboutMe-h2" >Services</h2>

        <p className="mt-10 pb-5 text-[#FFFFFF] text-center m-9 font-bold lg:text-lg font-fontRoboto" id="aboutMe-p" >
        Mi objetivo es poder ayudarte a alcanzar tus metas y objetivos
        </p>

        <div className="lg:grid grid-cols-2 grid-rows-1 gap-4 items-center mb-6 pb-1" >
        
        <div className=" mx-8 text-center content-center justify-center" id="services-img">

            <h3 className=" text-[#F1CCBA] font-medium font-fontRoboto pb-5 lg:pb-7 lg:mt-3">Responsive Design</h3>

        <img src="https://cdn-icons-png.flaticon.com/512/1253/1253591.png" className="inline max-h-44 lg:max-h-64 "></img>

            <p className="text-white font-normal lg:text-lg font-fontRoboto pt-5 lg:pb-7" id="aboutMe-p">
            ¿Problemas con el diseño responsivo? <br /> 
            ¡Déjame encargarme de eso por ti!
            </p>

        </div>
        
        <div className=" m-9 text-center content-center justify-center" id="services-img">

            <h3 className=" text-[#F1CCBA] font-medium font-fontRoboto pb-5 lg:pb-7 lg:mt-3">Web Development</h3>

        <img src="https://cdn-icons-png.flaticon.com/512/868/868786.png" className="ml-10 inline max-h-44 lg:max-h-64 "></img>

            <p className="text-white font-normal lg:text-lg font-fontRoboto pt-5 lg:pb-7" id="aboutMe-p">
                ¡Déjame ayudarte a crear la página web de tus sueños!
            </p>

        </div>
       

        </div>

        </section>

    </div>

</div>

  )
}
