import React from "react"
import Shop from "../composents/shops/Shop"
import Wrapper from "../composents/wrapper/Wrapper"


const Pages = ({shopItems }) => {
  return (
    <>
      <Shop shopItems={shopItems}  />    
     <Wrapper/>
    </>
  )
}

export default Pages
