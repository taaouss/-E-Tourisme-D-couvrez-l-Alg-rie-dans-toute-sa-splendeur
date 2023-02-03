import React from 'react'
import { Link } from 'react-router-dom'
import './SignUpContainer.css'
function LoginContainer() {
  return (
    <div className='container'>
     <div className='grid-container'>
        <div className='colonne-1'> 
         <Link to='/'> <i className='fa fa-house'></i></Link>
        </div>
        <div className='colonne-2'> 
          <h2> Connectez-vous et trouvez vos futures biens </h2> 
          <button className='btn--login'>se connecter avec google</button>
          <Link to="/signup" className='lien'> Créer un compte !</Link>
         
        </div>
     </div>
   </div>
  )
}

export default LoginContainer