import React from 'react';
import { AiOutlineTwitter } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { RiHome7Fill } from "react-icons/ri";
import {FaHashtag} from "react-icons/fa";
import {RiNotification2Line} from "react-icons/ri";
import {BiEnvelope} from "react-icons/bi";
import {BiBookmark} from "react-icons/bi";
import {RiFileList2Line} from "react-icons/ri";
import {MdPersonOutline} from "react-icons/md";
import {CgMoreO} from "react-icons/cg";
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.css';
import './leftSection.css';


function leftSection() {
    return (
        <div className="left-section">
            <div className="twitterLogo-outline">
                <AiOutlineTwitter className="twitter-logo" />
            </div>
            
            <div >
                <div className="links">
                    <RiHome7Fill className="link-icon"/>
                    <p className="link-text">Home</p>
                </div>
                <div className="links">
                    <FaHashtag className="link-icon"/>
                    <p className="link-text">Explore</p>
                </div>
                <div className="links">
                    <RiNotification2Line className="link-icon"/>
                    <p className="link-text">Notifications</p>
                </div>
                <div className="links">
                    <BiEnvelope className="link-icon"/>
                    <p className="link-text">Messages</p>
                </div>
                <div className="links">
                    <BiBookmark className="link-icon"/>
                    <p className="link-text">Bookmarks</p>
                </div>
                <div className="links"> 
                    <RiFileList2Line className="link-icon"/>
                    <p className="link-text">Lists</p>
                </div>
                <div className="links">
                    <MdPersonOutline className="link-icon"/>
                    <p className="link-text">Profile</p>
                </div>
                <div className="links">
                    <CgMoreO className="link-icon"/>
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
