import React from "react"
import './Header.css';
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +213 557 36 88 07</label>
          </div>
          
          <div className='right row RText'>
            <label>Aide</label>       
            <label>About Us</label>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Head
