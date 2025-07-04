import React, { useContext } from 'react'
import { LuMoonStar } from "react-icons/lu";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { MadeContext } from '../Context/AddContext';

const Header = () => {
        const {toggleTheme,theme}= useContext(MadeContext);

  return (
<div  className='w-full flex fixed py-2 px-7 m-0 justify-between text-black bg-white shadow-2xl items-center h-[70px]'>
    <div className="">
        <span>Logo</span>
    </div>
    <div className="">
        <button onClick={toggleTheme} className='transition-all  duration-500 p-3 bg-green-400 text-white rounded cursor-pointer'>{theme==="light"?<IoPartlySunnyOutline size={22} />:<LuMoonStar size={22} />}</button>
    </div>
    </div>
      )
}

export default Header