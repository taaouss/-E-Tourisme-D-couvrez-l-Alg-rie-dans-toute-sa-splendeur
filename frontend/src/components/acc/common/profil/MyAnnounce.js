import React from "react"
import { Link } from "react-router-dom"
import Contact from "../../../Contact"
import UserInformation from "../../../UserInformation"
import "./MyAnnounce.css"

const MyAnnounce = ({ CartItem, decrease , client}) => {
 

  return (
    <>
    
      <section className='cart-items'>
      <h5>Mes Annonces</h5>
      <div className='cartControl'>
        <Link to="/ajouter-annonce"> <button> Ajouter Une Annonce </button></Link>
        <Link to='/accueil'> <i className='fa fa-house icon-circle'></i></Link>
       </div>
        <div className='d_flex'>
        
          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Announce Published</h1>}

            {CartItem.map((item) => {

              return (
                <div className='cart-list produuct d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 DA
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'  onClick={() => decrease(item)} >
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                   
                    
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-profil produuct'>
            <h2>Mon Profil</h2>
            <div className="profil-co" >
             <Contact props={client}></Contact>
              <button>modifier profil</button>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default MyAnnounce
