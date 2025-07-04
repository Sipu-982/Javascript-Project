import React from 'react'
import { ContextProvider } from './Context/AddContext'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Header from './Pages/Header'

const App = () => {
  return (
    <ContextProvider>
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Contact/>
    </ContextProvider>
  )
}

export default App