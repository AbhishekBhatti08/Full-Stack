import React from 'react'

function Input(props) {
    return (
        <div>
            <input onChange ={props.Changed}></input>
        </div>
    )
}

export default Input;
