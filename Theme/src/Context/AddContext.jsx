import React, { createContext, useState } from "react";

export const MadeContext = createContext()

export const ContextProvider= ({children})=>{
    const [theme,SetTheme]= useState("light");
    const [lang,setLang]= useState("en")
    const translations = {
    en: {
    Home: "Hello! This is the home section!",
    About: "Hello! This is the about section!",
    Contact: "Hello! This is the contact section!",
    Service: "Hello! This is the service section!",
  },
  hi: {
    Home: "नमस्ते! यह होम सेक्शन है!",
    About: "नमस्ते! यह अबाउट सेक्शन है!",
    Contact: "नमस्ते! यह संपर्क सेक्शन है!",
    Service: "नमस्ते! यह सेवा सेक्शन है!",
  },
};
    const handleLanguageChange = (language)=>{
        setLang(language);
    }
    const {Home,About,Contact,Service}= translations[lang];

    const userInfo ={
        fullname:"Sipu Rana",
        email:"sipurana38@gmail.com"
    }
    const toggleTheme= ()=>{
        SetTheme((themeColor)=>(
            themeColor==="light"? "dark":"light"
        ));
    }

    
    return(
        <MadeContext.Provider value={{theme:theme,toggleTheme:toggleTheme,Home:Home,About:About,Contact:Contact,Service:Service,userInfo:userInfo,lang,handleLanguageChange}}>
         {children}
        </MadeContext.Provider>
    )
}