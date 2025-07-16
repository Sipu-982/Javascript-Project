import React, { useContext } from 'react'
import { MadeContext } from '../Context/AddContext';
import { RiResetLeftLine } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import { GrFormSubtract } from "react-icons/gr";

const About = () => {
        const {theme,About,dispatch}= useContext(MadeContext);
    
  return (
<div style={{background:theme==="light"? "#fff":"#000",color:theme==="light"? "#000":"#fff"}} className='w-full flex justify-center flex-col  items-center h-[75vh]'>
        <h2>{About}</h2>
                <div className="flex gap-4 mt-4">
        <button className='text-xl py-2 px-4 rounded-md bg-[#09830f] text-white font-bold' onClick={()=>dispatch({type:"Increment"})}><IoAddOutline size={20}/></button>
        <button className='text-xl py-2 px-4 rounded-md bg-[#09830f] text-white font-bold' onClick={()=>dispatch({type:"Decrement"})}><GrFormSubtract size={20}/></button>
        <button className='text-xl py-2 px-4 rounded-md bg-[#09830f] text-white font-bold' onClick={()=>dispatch({type:"Reset"})}><RiResetLeftLine size={20} /></button>
        </div>
    </div>
  )
}

export default About