import React , {useState }from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home' ;
import Accueil from './components/acc/Accueil';
import Profil from './components/acc/common/profil/Profil';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import AjouterAI from './components/pages/AjouterAI';
import Sdata from './components/acc/composents/shops/Sdata';



function App() {
  const { shopItems } = Sdata
  
  const [CartItem, setCartItem] = useState([])

  const decrease = (product) => {
    
    setCartItem(CartItem.filter((item) => item.id !== product.id))
    
}
const user={
  nom:" test",
  prenom:" test",
  adresse:" test, test",
  mail:"  test@gmail.com",
  numero:" 07777777777",
}
  return (
    <>
    <Router> 
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="accueil"  element={<Accueil/>}/>
    <Route path="profil"  element={<Profil CartItem={shopItems} decrease={decrease} client={user}/>}/>
    <Route path="ajouter-annonce" element={<AjouterAI/>}/>
    <Route path="signup" element={<SignUp/>}/>
    <Route path="login" element={<Login/>}/>
    </Routes>
    </Router>
    </> 
  );
}

export default App;
