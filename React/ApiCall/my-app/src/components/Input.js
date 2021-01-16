import React from 'react';

function Input(props) {
    // const textInput = React.createRef();

    // handleChange=() => {

    // }


    return (
        <div>
            <input onChange={props.change}
            placeholder="Please Enter Gibhub Profile Name"></input>
            <button onClick={props.onClick}>Click Here to see Github Profile</button>
        </div>
    )
    
}

export default Input;
