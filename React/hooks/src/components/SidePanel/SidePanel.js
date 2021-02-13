import React from 'react';
import './SidePanel.css';
import {useState} from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { IconContext } from 'react-icons';


function SidePanel() {

    const [show, changeShow ] = useState(true)

   const toggle=()=> changeShow(!show)

    return (
        <div>
            <div>
                {show ? <p className="toggleButton"  onClick={toggle} >X</p>:""}
            </div>
            
            <nav className={show? 'nav-menu': 'nav-menu-active'}>

                <ul  onClick={toggle}  style={{backgroundColor:'cadetblue', height:'100vh'}}>
                    <li>#</li>
                    <li>Home</li>
                    <li>Contacts</li>
                    <li>Projects</li>
                </ul>
            </nav>
            
        </div>
    )
}

export default SidePanel;
