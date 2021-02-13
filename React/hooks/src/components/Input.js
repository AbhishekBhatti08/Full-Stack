import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Input() {
    const [name, changeName] = useState("");
    const [age, changeAge] = useState("");

    const Print =()=>{
        console.log(name);
        console.log(age);
    }

    return (
        <div>
            <input type="text" placeholder="Enter Your Name" onChange={(event)=>{
                changeName(event.target.value)
            }} />
            <br></br>
            <br></br>
            <input type="number" placeholder="Enter Your Age" onChange={(event)=>{
                changeAge(event.target.value)
            }} />
            <Button variant="primary" onClick={Print} >Submit</Button>
        </div>
    )
}

export default Input;
