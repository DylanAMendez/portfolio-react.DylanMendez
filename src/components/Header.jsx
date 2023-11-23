import { NavBar } from './NavBar'

import logoDM from '../assets/images/DMLogo.png'


// Header contiene IMAGEN LOGO y NAVBAR

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8 bg-[#000000b7]">
        <img src={logoDM} alt="Logo" />
        
        <NavBar />
        
    </header>
    
    
  )
}



// color HR #056133 , #1c1c1c , #23714D , #F1CCBA