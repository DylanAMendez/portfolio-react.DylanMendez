



export const Skills = ( { nameSkill, imageSkill } ) => {
  return (
    <div className=" ">

      

        <div className="grid place-content-center justify-items-center">
                            <h3 className="bg-[#1c1c1ce0] px-7 text-white font-medium mb-3 lg:mb-5 justify-center" > {nameSkill} </h3>
                            <img src={imageSkill} className="w-20 lg:w-28 "></img>
                          </div>


    </div>
  )
}

export default Skills