import React from "react"
import MyAnnounce from "./MyAnnounce"



const Profil = ({ CartItem, decrease }) => {
  return (
    <>
      <MyAnnounce CartItem={CartItem} decrease={decrease}/>
    </>
  )
}

export default Profil

