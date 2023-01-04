import React from 'react'
import "./Popup.css"

function Contact(props) {
  return (
    <div className='Contact-container'>
      <div className='Picture-container'/>
       <h3> Nom Prenom</h3>
       <div className='contacts'>
        <span><i class="fa-solid fa-envelope"></i>  @exemple :</span>
        <span><i class="fa-solid fa-phone"></i> 5555555</span>
        <span><i class="fa-solid fa-location-dot"></i> YYYY,YYYYY </span>
       </div>
    </div>
  )
}

export default Contact