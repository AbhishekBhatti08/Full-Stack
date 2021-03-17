import {React, useState, useEffect} from 'react';
import './Form.css';
import PrintTweets from './PrintTweets/PrintTweets';
import axios from 'axios';

function Form() {

    const [text, newText] = useState(null);

    const [name, changeName] = useState(null);



   const data = {
       
        userName: name,
        text: text,
    };



    const handleSubmit=(event)=>{
        console.log("Form Submitted");
        // console.log(data);
        fetch('http://localhost:4000/Hello', {
                method: "POST",
                body: JSON.stringify("Hello"),
                headers: {"Content-type": "application/json;charset=UTF-8"}
              })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
            event.preventDefault();
        
        }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter Your Name" 
                onChange={(e)=>{changeName(e.target.value); console.log(name)}}>    
                </input>

                <textarea name="tweet" id="" cols="30" rows="10" maxLength="48" className="text-area"
                placeholder="What's happening..." 
                onChange={(e)=>{newText(e.target.value); console.log(text)}} >
                </textarea>

                <input type="submit" value="Tweet" className="tweet-submit"/>


            </form>


            <PrintTweets/>



            
        </div>
    )
}

export default Form;
