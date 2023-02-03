import React from "react"
import "./style.css"
import { Link } from "react-router-dom"


const Footer1 = () => {
  return (
    <>
      <footer>
        <div className='grid1'>
          <div className='box'>
            <h1>nom et logo</h1>
          </div>
          
          <div className='box'>
            <h2>Services</h2>
            <ul>
              <li>Aide</li>
              <li>A propos </li>
              <li>Profil </li>
              <li>Accueil</li>
             
            </ul>
          </div>

          <div className='box'>
            <h2>Contact</h2>
            <ul>
              <li>46, Rue Krim Belkacem, Bab Ezzouar, Alger</li>
              <li>Email: support@gmail.com</li>
              <li>Phone:  +213 557 36 88 07</li>
              <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            
          </div>
          <small class='website-rights'>SITE © 2022</small>
            </ul>
          </div>
       
        </div>
      </footer>
    </>
  )
}

export default Footer1
