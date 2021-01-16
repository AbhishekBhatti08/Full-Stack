import React from 'react'

function cards(props) {
    return (
        <div className="card-outline">
           <h5>{props.profile.login}</h5>
            <h5>{props.profile.id}</h5>
        </div>
    )
}

export default cards;
