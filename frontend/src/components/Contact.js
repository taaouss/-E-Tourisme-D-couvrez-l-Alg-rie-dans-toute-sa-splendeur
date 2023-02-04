import React from 'react'
import "./Popup.css"

function Contact({props}) {
  return (
    <div className='Contact-container'>
      <div className='Picture-container'/>
       <h3> {props.nom} {props.prenom}</h3>
       <div className='contacts'>
        <span><i class="fa-solid fa-envelope"></i> {props.mail}</span>
        <span><i class="fa-solid fa-phone"></i>  {props.numero}</span>
        <span><i class="fa-solid fa-location-dot"></i>{props.adresse} </span>
       </div>
    </div>
  )
}

export default Contact