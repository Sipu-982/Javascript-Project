import React, { useContext} from 'react'
import { MadeContext } from '../Context/AddContext'

const Home = () => {
    const {theme,Home,userInfo}= useContext(MadeContext);
  return (
    <div style={{background:theme==="light"? "#fff":"#000",color:theme==="light"? "#000":"#fff"}} className='w-full flex justify-center flex-col  items-center h-[75vh]'>
        <h2>{Home}</h2>
        <h2>{userInfo.fullname}</h2>
        <h2>{userInfo.email}</h2>
    </div>
  )
}

export default Home