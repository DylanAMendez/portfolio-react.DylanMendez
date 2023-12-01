



export const Skills = ( { nameSkill, imageSkill } ) => {
  return (
    <div className=" ">

      

        <div className="grid place-content-center justify-items-center ">
          <div className=" hover:bg-slate-400">

          
                            <img src={imageSkill} className=" w-16 "></img>
                            <h3 className=" text-white font-medium  justify-center text-center " > {nameSkill} </h3>

            </div>
          </div>

    </div>
  )
}

export default Skills