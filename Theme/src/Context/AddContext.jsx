import React, { createContext, useState } from "react";

export const MadeContext = createContext()

export const ContextProvider= ({children})=>{
    const [theme,SetTheme]= useState("light");

    const Home = "Hello This is home section!"
    const About = "Hello This is about section!"
    const Contact = "Hello This is contact section!"
    const Service = "Hello This is service section!"

    const toggleTheme= ()=>{
        SetTheme((themeColor)=>(
            themeColor==="light"? "dark":"light"
        ));
    }

    return(
        <MadeContext.Provider value={{theme:theme,toggleTheme:toggleTheme,Home:Home,About:About,Contact:Contact,Service:Service,setLightTheme:()=>SetTheme("light"),setBlackTheme:()=>SetTheme("dark")}}>
         {children}
        </MadeContext.Provider>
    )
}