import React, { useContext } from 'react'
import { MadeContext } from '../Context/AddContext';

const Contact = () => {
        const {theme,Contact}= useContext(MadeContext);
    
  return (
<div style={{background:theme==="light"? "#fff":"#000",color:theme==="light"? "#000":"#fff"}} className='w-full flex justify-center flex-col  items-center h-[75vh]'>
        <h2>{Contact}</h2>
            </div>  )
}

export default Contact