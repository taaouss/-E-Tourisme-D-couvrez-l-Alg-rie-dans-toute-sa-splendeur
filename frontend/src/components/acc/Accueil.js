import React from "react"
import "./Accueil.css"
import Shop from "./composents/shops/Shop"
import Footer from "./common/footer/Footer1"
import Header from "./common/header/Header"
import Pages from "./pages/Pages";
import Sdata from "./composents/shops/Sdata";
import Profil from "./common/profil/Profil";
import Footer1 from './common/footer/Footer1'




function App() {
  const { shopItems } = Sdata
  return (
    <>
    
      <Header/>
      <Pages shopItems={shopItems}/>
      <Footer1/>
    </>
  )
}

export default App