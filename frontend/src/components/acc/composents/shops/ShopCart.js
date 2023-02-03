import React , { useState } from "react"
import Popup   from "../../../Popup"
import "../../../Popup.css"
import Wrapper from "../wrapper/Wrapper";

const ShopCart = ({ shopItems}) => {
  console.log(shopItems.filter(shopItems=>shopItems.name.includes("villa")));
  const [buttonPopup ,setButtonPopup]=useState(false);
  return (
    <>
      {shopItems.map((shopItem) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img' >
                <img  src={shopItem.cover} alt='' />
              </div>
              <div className='product-details'>
                <h4>{shopItem.name}</h4>
                <h3>128 m°</h3>
                <div className='price'>
                  <h4>{shopItem.price}.00 DA </h4>
                
                  <button className="voirplus" onClick={()=>{setButtonPopup(true)}}>
                     voir plus   
                  </button>
                  <Popup trigger={buttonPopup} setTrigger={setButtonPopup} shopItem={shopItem}/> 
                </div>
              </div>
            </div>
          </div>
        )
      })}
     
    </>
  )
}

export default ShopCart
