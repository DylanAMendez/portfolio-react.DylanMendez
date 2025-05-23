
import { Typewriter } from 'react-simple-typewriter';


const Typing = () =>
{
  return (
    <div>

      <h1 className=' text-[#e6ffe6]  font-normal font-fontPoppins text-center text-3xl mt-7  ' id='typing-id' >
        <span className=''>
          <Typewriter

            words={['Software Developer', '']}
            loop={0}
            cursor
            typeSpeed={70}
            deleteSpeed={20}
            delaySpeed={1000}

          />
        </span>
      </h1>

    </div>
  )
}

export default Typing
