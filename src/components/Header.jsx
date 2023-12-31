import { NavBar } from './NavBar'

import { Link } from 'react-router-dom';

import logoDM from '../assets/images/DMLogo.png'


// Header contiene IMAGEN LOGO y NAVBAR

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8 bg-[#000000b7] "  id='header-id'>
      <Link to="/">  <img src={logoDM} alt="Logo" className='max-h-16 lg:max-h-32' /> </Link>
        
        <NavBar />
        
    </header>
    
    
  )
}



// color HR #056133 , #1c1c1c , #23714D , #F1CCBA , bg-[#000000b7]