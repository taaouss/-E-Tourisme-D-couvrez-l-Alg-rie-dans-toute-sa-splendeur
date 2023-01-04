import React, { useState } from 'react'
import Popup   from '../Popup'
import "../Popup.css"


function TestPopup() {
    const [buttonPopup ,setButtonPopup]=useState(false);
  return (
    <div className='popup-co'> 
    <button onClick={()=>{setButtonPopup(true)}}>TestPopup</button>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>  
   
  
    </div>
  ) 
}

export default TestPopup  ;