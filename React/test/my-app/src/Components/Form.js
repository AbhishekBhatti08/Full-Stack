import {React, useState} from 'react';
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
        event.preventDefault();
        console.log(data);
        let url = "http://localhost:4000/postTweet";
        console.log(url);

        // const requestOptions = {
        //             method: 'POST',
        //             headers: { 'Content-Type': 'application/json' },
        //             body: { data },
        //             url: url,
        //         };

        axios.post(url,data).then(response=>{
               console.log(response)
           }).catch(error=>{
               console.log(error)
           })

        // fetch(url, requestOptions).then(response=>response.text().then(
        // data=>console.log(data))).catch(error=>console.log(error));

        // fetch(url, requestOptions).then(response=>response.text().then(
        // data=>console.log(data))).catch(error=>console.log(error));   

    };

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
