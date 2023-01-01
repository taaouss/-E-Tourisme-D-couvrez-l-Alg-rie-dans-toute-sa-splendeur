import React, { useState } from 'react'
import './SignUpContainer.css'

function UserInformation() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [adress , setAdress]=useState("");
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }
  return (

    <div className='container'>
     <div className='grid-container'>
        <div className='colonne-1'/>
        <div className='colonne-2'> 
          <h2> Vos informations </h2> 
          <form className="register-form" onSubmit={handleSubmit}>
            <label>votre nom :</label>
            <input className='user-input' value={name} name="name" onChange={(e) => setName(e.target.value)} placeholder="Nom" />
            <label>votre prenom :</label>
            <input className='user-input' value={firstName} name="name" onChange={(e) => setFirstName(e.target.value)}  placeholder="Prenom" />
            <label>votre numero:</label>
            <input className='user-input'  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="numero de telephone"  />
            <label>votre adresse:</label>
            <input className='user-input' value={adress} onChange={(e) => setAdress(e.target.value)}  placeholder="adresse"   />
            <button type="submit" className='submitBTN'>valider</button>
        </form>
         </div>
     </div>
   </div>
  
  )
}

export default UserInformation