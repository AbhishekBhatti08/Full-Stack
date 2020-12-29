import React from 'react';
import {Link} from 'react-router-dom';


function CardItem() {
    return (
        <>
            <Link className="cards_item">
                <figure className="cards_item_pic-wrap">
                    <img src="/" alt="Travel Image" className="cards_item_img" />
                </figure>
                <div className="cards_item_info">
                    <h5 className="cards_item_text" /> 
                </div>
            </Link>  
        </>
    )
}

export default CardItem;
