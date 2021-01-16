import React from 'react';
// import Profiles from './profile/profiles';

function profile(props) {

console.log(props.profile);    

    return (
        <div>
           <h5>{props.profile.login}</h5> 
            <h5>{props.profile.id}</h5>
        </div>
    )
}

export default profile;
