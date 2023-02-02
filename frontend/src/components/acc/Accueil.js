import React from "react"
import "./Accueil.css"
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Footer from "./common/footer/Footer"
import Header from "./common/header/Header"
import Pages from "./pages/Pages";
import Sdata from "./composents/shops/Sdata";
import Profil from "./common/profil/Profil";




function App() {
  const { shopItems } = Sdata
  return (
    <>
    
        <Header/>
       <Pages shopItems={shopItems}/>
        <Footer /> 
         
    </>
  )
}

export default App