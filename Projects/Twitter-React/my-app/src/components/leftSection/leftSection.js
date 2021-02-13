import React from 'react';
import { AiOutlineTwitter } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import Button from 'react-bootstrap/Button';
import './leftSection.css';


function leftSection() {
    return (
        <div className="left-section">
            <div className="twitterLogo-outline">
                <AiOutlineTwitter className="twitter-logo" />
            </div>
            
            <div >
                <div className="links">
                    <GoHome className="link-icon"/>
                    <p className="link-text">Home</p>
                </div>
                <div className="links">
                    <GoHome className="link-icon"/>
                    <p className="link-text">Explore</p>
                </div>
                <div className="links">
                    <GoHome className="link-icon"/>
                    <p className="link-text">Notifications</p>
                </div>
                <div className="links">
                    <GoHome className="link-icon"/>
                    <p className="link-text">Messages</p>
                </div>
                <div className="links">
                    <GoHome className="link-icon"/>
                    <p className="link-text">Bookmarks</p>
                </div>
                <div className="links"> 
                    <GoHome className="link-icon"/>
                    <p className="link-text">Lists</p>
                </div>
                <div className="links">
                    <GoHome className="link-icon"/>
                    <p className="link-text">Profile</p>
                </div>
                <div className="links">
                    <GoHome className="link-icon"/>
                    <p className="link-text">More</p>
                </div>
                <>
                    {<Button variant="primary">Tweet</Button>}
                </>
            </div>
        </div>
    )
}

export default leftSection;
