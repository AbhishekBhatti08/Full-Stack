import {React, useState, useEffect} from 'react';
import './Form.css';
import PrintTweets from './PrintTweets/PrintTweets';
import axios from 'axios';


function Form() {

    const [text, setText] = useState(null);

    const [name, setName] = useState(null);

    const [stateApp, setAppState] = useState([]);

    useEffect(() => {
        
        let url = "http://localhost:4000/";
        axios.get(url)
        .then(res=> {console.log(res)
        setAppState(res.data)})
        .catch(err => console.log(err))

    }, [setAppState]);

    

    console.log(stateApp);


    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Form Submitted");
        let data = {
            tweet: text,
        };

        console.log(data);
        fetch('http://localhost:4000/Hello', {
                method: "POST",
                body: JSON.stringify(data),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json', 
                  }
              })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(err => console.log(err));


            window.location.reload();
             

        }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter Your Name" 
                onChange={(e)=>{setName(e.target.value); console.log(name)}}>    
                </input>

                <textarea name="tweet" id="" cols="30" rows="10" maxLength="256" className="text-area"
                placeholder="What's happening..." 
                onChange={(e)=>{setText(e.target.value); console.log(text)}} >
                </textarea>

                <input type="submit" value="Tweet" className="tweet-submit"/>


            </form>

            <div className="Tweets">
               
                    {

                        stateApp.map((item) =>{
  
                           return     <p key={item.id}>{item.tweet}</p>

                        })

                    }
               

            </div>
           
    
        </div>
    )
}

export default Form;
