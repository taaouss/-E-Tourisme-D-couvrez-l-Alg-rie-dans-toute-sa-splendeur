import React from 'react'
import"./AiInformations.css"
function AiInformations (props) {
  return (
    <div className='AiInformations-container'>
      <div className='AI-titre'>
         <h2>{props.name.name}</h2>
         <button>Faire une offre </button>
       </div>
       <div className='col-div'>
        <div className='c--1'>
        <h4 className='info'><i class="fa-sharp fa-solid fa-handshake-simple"></i> Catégorie </h4>
        <p> info </p>
        <h4  className='info'><i class="fa-sharp fa-solid fa-house-building"></i>Type du bien</h4>
        <p> info </p>
        </div>
        <div className='c--2'>
        <h4  className='info'><i class="fa-solid fa-sack-dollar"></i>  Prix </h4>
        <p>{props.name.price}.00 DA</p>
        <h4  className='info'><i class="fa-sharp fa-solid fa-maximize"></i>Surface </h4>
        <p> info </p>
        </div>
       </div>
       <div className='Description'>
        <h3>Description</h3>
        <p>DescriptionDescriptionDescription
           DescriptionDescriptionDescription 
         </p>
       </div>
    </div>
  )
}

export default  AiInformations 
 