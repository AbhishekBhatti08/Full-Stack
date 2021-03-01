import React from 'react'
import { Im500Px } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import './NavBar.css';
import {useState} from 'react';
import Sidepanel from './Sidepanel/Sidepanel';

function NavBar() {

const [state, setstate] = useState(true)

const showSidebar = () => setstate(!state);

console.log(state);

    return (
        <div className="Nav">

                  
            <FaBars className="bars" onClick={showSidebar}/>

            <div className={state ? 'sidePanel': 'sidePanel-active'}>
                
                <div className="sidepanel-header">
                    <p className="home-heading">Home</p>
                    <AiOutlineClose className="close-icon" onClick={showSidebar}/>    
                </div>

                <div className="sidepanel-profile">
                    <img className="person-icon" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-256.png"/>
                    <MdAddCircleOutline className="add-icon" />
                </div>

                <div className="user-details">
                    <p className="user-name">Abhishek Bhatti</p>
                    <p className="user-ID">@Abhishe46416541</p>

                </div>

                <div className="followers-section">
                    <p className="following-count">375</p>
                    <p className="following">Following</p>
                    <p className="followers-count">190</p>
                    <p className="followers">Followers</p>
                </div>
                
                <Sidepanel />


            </div>


            <p className="home">Home</p>
            <Im500Px className="tag"/>
            

        </div>
    )
}

export default NavBar;
