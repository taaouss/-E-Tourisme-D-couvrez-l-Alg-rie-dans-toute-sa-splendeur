import React from "react"
import "./MyAnnounce.css"

const MyAnnounce = ({ CartItem, decrease }) => {
 

  return (
    <>
    
      <section className='cart-items'>
      <h5>Mes Annonces</h5>
      <div className='cartControl'>
                      <button> Ajouter Une Annonce
                      </button>
                    </div>
        <div className='d_flex'>
        
          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Announce Published</h1>}

            {CartItem.map((item) => {

              return (
                <div className='cart-list product d_flex' key={item.id}>
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

          <div className='cart-profil product'>
            <h2>Mon Profil</h2>
            <div >

              {/*ICI TU METS LES INFOS DE LUTILISATEUR*/}
              
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default MyAnnounce
