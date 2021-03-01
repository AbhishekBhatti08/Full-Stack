import React from 'react';
import './RightSection.css';
import {BiSearch} from "react-icons/bi";
import Updates from './Updates/Updates';

function RightSection() {
    return (
        <div>
            <div className="right-column">

                <div className="search">

                    <BiSearch className="search-icon"/>
                    <input  placeholder="Search Twitter" className="input"/>
                   

                </div>

                <Updates className="updates-columns"/>
                    
                    

            </div>


            
        </div>
    )
}

export default RightSection;
