import React, { useContext } from 'react'
import { MadeContext } from '../Context/AddContext';

const About = () => {
        const {theme,About,dispatch}= useContext(MadeContext);
    
  return (
<div style={{background:theme==="light"? "#fff":"#000",color:theme==="light"? "#000":"#fff"}} className='w-full flex justify-center flex-col  items-center h-[75vh]'>
        <h2>{About}</h2>
                <div className="flex gap-4 mt-4">
        <button className='text-xl py-1 px-3 rounded-md bg-[#09830f] text-white font-bold' onClick={()=>dispatch({type:"Increment"})}>+</button>
        <button className='text-xl py-1 px-3 rounded-md bg-[#09830f] text-white font-bold' onClick={()=>dispatch({type:"Decrement"})}>-</button>
        </div>
    </div>
  )
}

export default About