import React from 'react'
import Navbar from '../Navbar';
import About from '../About';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from  '../HeroSection'


function Home (){
    return(
       <div>  
        <Navbar/>
        <HeroSection/>
        <Cards/>
        <About/>
        <Footer/>
       </div>
        
    ) ;
}
export default Home ;