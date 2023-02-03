import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home' ;
import Accueil from './components/acc/Accueil';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
    <Router>
     {/*<Navbar/>*/} 
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="accueil"  element={<Accueil/>}/>
    <Route path="signup" element={<SignUp/>}/>
    <Route path="login" element={<Login/>}/>
    </Routes>
    </Router>
    </> 
  );
}

export default App;
