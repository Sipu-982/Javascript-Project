import React, { useContext } from 'react'
import { LuMoonStar } from "react-icons/lu";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { MadeContext } from '../Context/AddContext';

const Header = () => {
        const {toggleTheme,theme,lang,handleLanguageChange}= useContext(MadeContext);

  return (
<div  className='w-full flex fixed py-2 px-7 m-0 justify-between text-black bg-white shadow-xl items-center h-[70px]'>
    <div className="">
        <span className='font-bold text-xl'>Logo</span>
    </div>
    <div className="flex gap-x-5 items-center ">
        <button onClick={toggleTheme} className='transition-all  duration-500 p-3 bg-green-400 text-white rounded cursor-pointer'>{theme==="light"?<IoPartlySunnyOutline size={22} />:<LuMoonStar size={22} />}</button>
        <select className='w-30 p-2 h-10 bg-[#f8fbf9] border border-gray-400 rounded-sm' onChange={(e) => handleLanguageChange(e.target.value)} value={lang}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
    </div>
      )
}

export default Header