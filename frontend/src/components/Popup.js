import React from 'react'
import AiInformations from './AiInformations'
import Contact from './Contact'
import Maps from './Maps'
import "./Popup.css"
import Carousel from './Carousel'

export default function Popup(props) {
    const user={
      nom:"manel",
      prenom:"khalili",
      adresse:"Freha, Tizi-ouzou",
      mail:"manel@gmail.com",
      numero:"0758693214",
    }
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
          <div className='c-1'>
          <div><button className='close-btn1' onClick={()=>{props.setTrigger(false)}}><i class="fa-solid fa-xmark"></i></button></div>
            <div className='c-1-1'>
            <Contact props={user}/>
            <Carousel/>
            </div>
            <div className='c-1-2'>
            <AiInformations name={props.shopItem}/>
            </div>
          </div>
          <div className='c-2'>
          <div><button className='close-btn' onClick={()=>{props.setTrigger(false)}}><i class="fa-solid fa-xmark"></i></button></div>
          <div className='map-co'> <Maps/></div>
          </div>
           
          
        </div>
    </div> ) : ""
    
  }
