import React from 'react';
import Card from './Each-Card/Card';
import '../Cards/Cards.css';

function Cards(props) {

    console.log(props);
    return (
        <div className="cards">

         {
             props.api.map((item)=> {
                return(

                    <div className="card-outline">

                        <img src={item.links.mission_patch_small} alt="SpaceX Mission"/>
                        <h5 className="missionID">{item.mission_name}</h5>
                        <h5>Mission IDs: {item.mission_id}</h5>
                        <h5>Launch Year: {item.launch_year}</h5>
                        <h5>Successful Launch: {item.launch_success}</h5>
                        <h5>Successful Landing: {item.rocket.first_stage.cores[0].land_success}</h5>

                    </div>

                )


             })


         }   


        </div>
    )
}

export default Cards;
