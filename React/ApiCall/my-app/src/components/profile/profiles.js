import React from 'react';
// import profile from '../profile';
import Cards from './card-Print/cards.js';
import './card-Print/cardStyle.css';

function profiles(props) {
    console.log(props.apiset);

    return (

        <div className="card-container" >

            {
                props.apiset.map((item) => {

                    return (
                        <div className="card-outline"
                        onClick={()=>props.onClick(item.id)} key={profiles.id}>
                            <div className="avatar">
                                <img src={item.avatar_url} />
                            </div>
                            <h5>{item.login}</h5>
                            <h5>{item.id}</h5>
                        </div>

                        // <Cards />
                    )

                    // console.log('Cards tag skipped');    

                })
            }

        </div>

    )







}


export default profiles;
