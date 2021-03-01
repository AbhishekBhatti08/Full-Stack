import React from 'react';
import { RiHome7Fill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import {RiNotification2Line} from "react-icons/ri";
import {BiEnvelope} from "react-icons/bi";
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            
            <RiHome7Fill className="footer-icon"/>
            <BsSearch className="footer-icon"/>
            <RiNotification2Line className="footer-icon"/>
            <BiEnvelope className="footer-icon"/>
            
        </div>
    )
};

export default Footer;
