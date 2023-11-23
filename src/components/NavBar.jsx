import { useState } from 'react'

import { Link } from 'react-router-dom';

import burgerMenu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/icon-menu-close.svg'

export const NavBar = () => {

    const [menuClicked, setMenuClicked] = useState(true)

    const handleClick = ()=> {

        setMenuClicked(prevState => !prevState)

    }

  return (
    <>
    <ul className={`${menuClicked ? 'hidden' : ''} absolute text-[#23714D] top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px] mr-1 bg-[#000000f5] lg:bg-[#00000000] lg:mx-7 z-10 font-fontPoppins  `}>
        <li className={`${menuClicked ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
          <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={handleClick} alt="" />
        </li>
        <li className='mb-8 sm:mb-0'>
            <Link to="/">Home</Link>
        </li>
        <li className='mb-8 sm:mb-0'>
        <Link to="/projects">Projects</Link>
        </li>
        <li className='mb-8 sm:mb-0'>
        <Link to="/services">Services</Link>
        </li>
        <li className='mb-8 sm:mb-0'>
        <Link to="/contact">Contacto</Link>
        </li>
      </ul>
      <img className={`${menuClicked ? '' : 'hidden'} w-10 h-5 mr-9 cursor-pointer sm:hidden`} src={burgerMenu} onClick={handleClick} alt="" />
    </>
  )
}

