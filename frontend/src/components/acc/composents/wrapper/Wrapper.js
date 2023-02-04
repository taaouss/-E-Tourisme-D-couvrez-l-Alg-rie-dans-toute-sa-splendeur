import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Accessible dans tout le territoire Algérien",
      decs: "Nous offrons des prix compétitifs sur nos plus de 100 millions de produits, quelle que soit leur gamme.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Achetez en toute confiance ",
      decs: "Toutes les annonces seront verifier par l'un de nos agents , vous garantissant ainsi des annonces immoblières de confiance .",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Assistance continue ",
      decs: "notre équipe sera là pour vous offrir une meilleure expérience.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Données sécurisées",
      decs: "Toutes vos données seront mises en sécurité .",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className=' grid2'>
          {data.map((val, index) => {
            return (
              <div className='service-product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
