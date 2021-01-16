import React from 'react';
import './section1Style.css';

function section1(props) {
    console.log(props.data);
    if(props.data.length == 0)
        return null;
    return (
        <div className="sec-container" >

            <div className="image">
                <img src={props.data[0].avatar_url}
                    alt={props.data[0].id} />
            </div>
            <div className="details">
                <h3>{props.data[0].login}</h3>
                <h4>{props.data[0].id}</h4>
            </div>


        </div>
    )
}

export default section1;
