import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p></p>
                    <p>Le premier site d’annonces
                         immobilières en Algérie</p>
                    <p>Notre site web est une véritable vitrine pour l’immobilier, à travers son contenu, son organisation et son design uniques nous facilitons les processus qui traitent l’achat et la location de biens. Nous représentons, en Algérie, le cœur du secteur commercial de l’immobilier puisque nous incarnons la digitalisation de la vente/location de divers biens. Nous proposons plusieurs annonces variées accessibles et ordonnées selon les spécifications de nos utilisateurs. Nous disposons d’une interface facilement navigable et notre contenu s’étend sur d’innombrables secteurs des 58 wilaya d’Algérie.
</p>
                </div>
                <div className='col-2'>
                    <img src="images/illustration_1.PNG"/>
                </div>
            </div>
        </div>
    )
}

export default About ;