import React from 'react'
import About from '../About';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from  '../HeroSection'


function Home (){
    return(
       <div>  
        <HeroSection/>
        <Cards/>
        <About/>
        <Footer/>
       </div>
        
    ) ;
}
export default Home ;