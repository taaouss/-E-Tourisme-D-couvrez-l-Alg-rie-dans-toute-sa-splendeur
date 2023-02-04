import React from "react"
import Head from "../header/Head"
import MyAnnounce from "./MyAnnounce"



const Profil = ({ CartItem, decrease ,client}) => {
  return (
    <>
      <MyAnnounce CartItem={CartItem} decrease={decrease} client={client}/>
    </>
  )
}

export default Profil

