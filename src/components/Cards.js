import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> On vous propose un large choix de biens immobiliers!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/illustration_2.PNG'
              text='Notre site est une riche bibliothèque d’annonces immobilières disposant chacune de ses caractéristiques principales. vous y retrouverez, pour chaque annonce, des photographies en haute dimension, des informations détaillées sur les biens proposés et enfin la position exacte de ces derniers.'
              label='Accès à l’immobilier'
              path='/services'
            />
            <CardItem
              src='images/illustration_6.PNG'
              text='Nous disposons d’un moteur de recherche avec des filtres afin de vous permettre d’accéder de manière immédiate aux annonces qui vous intéressent à partir de vos propres critères. De plus, vous construirez votre profil en y enregistrant des annonces ainsi qu’en ajoutant vos propres annonces et informations .'
              label='Recherche et personnalisation'
              path='/products'
            />
            <CardItem
              src='images/illustration_7.PNG'
              text='Nous avons pour vocation de collecter des prospects tout en facilitant l’expérience client sur notre site web. Pour cela, nous rendons visibles les informations de contacts tout en disposant d’une messagerie de communication et d’interaction, afin que vous puissiez très facilement prendre contact avec les potentiels vendeurs/locataires.'
              label='Expérience client'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;