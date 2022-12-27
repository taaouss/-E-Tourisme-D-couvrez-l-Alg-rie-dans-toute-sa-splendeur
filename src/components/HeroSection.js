import React from 'react'
import { Button } from './Button' 
import './HeroSection.css' 
import '../App.css' 

function HeroSection(){
  return (
    <div className='hero-container'>
      <div className='colonne1'>
      <h1>Explorer la science de l’immobilier </h1>
       <p> Qu'est-ce que vous attendez ?</p>
       <div className='hero-btns'>
        <Button 
        className="btns"
        buttonStyle='btn--outline'
        buttonSize='btn--large'>
            S'inscrire
        </Button>
        <Button 
        className="btns"
        buttonStyle='btn--primary'
        buttonSize='btn--large'>
            Se connecter
        </Button>
       </div>
      </div>
      <div className='colonne2'>

      </div>
       
    </div>
  );
}

export default HeroSection ;

