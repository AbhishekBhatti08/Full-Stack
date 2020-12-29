import '../../App.css';
import React from 'react'
import HeroSection from '../HeroSection';
import Cards from '../Pages/Cards';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>


    )
}

export default Home;