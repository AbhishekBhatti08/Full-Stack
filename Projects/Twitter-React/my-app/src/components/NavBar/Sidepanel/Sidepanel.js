import React from 'react';
import { MdPersonOutline } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { BsLightning } from "react-icons/bs";
import { BsNewspaper } from "react-icons/bs";
import { CgArrowTopRightR } from "react-icons/cg";
import { SiGoogleanalytics } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdDataUsage } from "react-icons/md";
import { CgDisplayGrid } from "react-icons/cg";
import { CgShortcut } from "react-icons/cg";
import './Sidepanel.css';

function Sidepanel() {
    return (
        <div className="sidepanel-outline">

            <div className="profile-link">
                <MdPersonOutline className="person-outline" />
                <p className="Profile-1">Profile</p>
            </div>

            <div className="profile-link">
                <RiFileListLine className="person-outline" />
                <p className="Profile-1">Lists</p>
            </div>

            <div className="profile-link">
                <BsChatDots className="person-outline" />
                <p className="Profile-1">Topics</p>
            </div>

            <div className="profile-link">
                <BiBookmark className="person-outline" />
                <p className="Profile-1">Bookmarks</p>
            </div>

            <div className="profile-link">
                <BsLightning className="person-outline" />
                <p className="Profile-1">Moments</p>
            </div>

            <div className="profile-link">
                <BsNewspaper className="person-outline" />
                <p className="Profile-1">Newsletters</p>
            </div>

            <div className="profile-link">
                <CgArrowTopRightR className="person-outline" />
                <p className="Profile-1">Twitter Ads</p>
            </div>

            <div className="profile-link">
                <SiGoogleanalytics className="person-outline" />
                <p className="Profile-1">Analytics</p>
            </div>

            <div className="profile-link">
                <FiSettings className="person-outline" />
                <p className="Profile-1">Settings and Privacy</p>
            </div>

            <div className="profile-link">
                <IoIosHelpCircleOutline className="person-outline" />
                <p className="Profile-1">Help Center</p>
            </div>

            <div className="profile-link">
                <MdDataUsage className="person-outline" />
                <p className="Profile-1">Data Saver</p>
            </div>

            <div className="profile-link">
                <CgDisplayGrid className="person-outline" />
                <p className="Profile-1">Display</p>
            </div>

            <div className="profile-link">
                <CgShortcut className="person-outline" />
                <p className="Profile-1">Keyboard Shortcuts</p>
            </div>

            <div className="profile-link">
                <p className="Profile-1 logOut">Log Out</p>
            </div>



            
        </div>
    )
}

export default Sidepanel;
