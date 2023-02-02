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
    <Navbar/>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="Services"  element={<Accueil/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="signup" element={<SignUp/>}/>
    </Routes>
    </Router>
    </> 
  );
}

export default App;
