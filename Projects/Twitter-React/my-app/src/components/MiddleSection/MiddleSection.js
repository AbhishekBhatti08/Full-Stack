import React from 'react';
import NavBar from '../NavBar/NavBar';
import './MiddleSection.css'
import PostTweet from './PostTweet/PostTweet';
import Footer from './Footer/Footer';



function MiddleSection() {
    return(
        <div className="main-container">
            <NavBar />
            <PostTweet/>
            <Footer />

        </div>
                
    )
}

export default MiddleSection;
