import React, {useState} from "react"
import "./Accueil.css"
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Sdata from "./composents/shops/Sdata";
import Profil from "./common/profil/Profil";






function App() {
  const { shopItems } = Sdata
  
  const [CartItem, setCartItem] = useState([])

  const decrease = (product) => {
    
    setCartItem(CartItem.filter((item) => item.id !== product.id))
    
}
  return (


<>
<Profil CartItem={shopItems} decrease={decrease}/>
  

</>
  )
}

export default App
