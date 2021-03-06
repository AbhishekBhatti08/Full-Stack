import React, { useState, useEffect } from 'react';
import {FaGlobeAmericas} from "react-icons/fa";
import {GoFileMedia} from "react-icons/go";
import {AiOutlineFileGif} from "react-icons/ai";
import {BiPoll} from "react-icons/bi";
import {VscSmiley} from "react-icons/vsc";
import {AiOutlineSchedule} from "react-icons/ai";
import './PostTweet.css';
import axios from 'axios';

function PostTweet() {

    const [text, newText] = useState(null);



   const data = {
       
        text: text,
    };

   

   const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(data);
        let url = "http://localhost:4000/postTweet";
        console.log(url);

        const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: { text: text },
                    url: url,
                };

        // axios(requestOptions,data).then(response=>{
        //        console.log(response)
        //    }).catch(error=>{
        //        console.log(error)
        //    })

        fetch(url, requestOptions).then(response=>response.text().then(
        data=>console.log(data))).catch(error=>console.log(error));

    };


    // useEffect(() => {
        
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ text: text })
    //     };
    //     console.log(data);
    //     let url = "http://localhost:4000/postTweet";
    //     console.log(url);
    //     fetch(url, requestOptions).then(
    //         response=>response.json().then(
    //         data=>console.log(data))).catch(
    //         error=>console.log(error));

    //     }
    // }, [])


    return (
        <div className="PostTweet">

            <div className="top-section">

                    <div >
                    <img className="person" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-256.png"/>
                    </div>

                    <div className="status">

                        <form onSubmit={handleSubmit}>

                            <textarea name="tweet" id="" cols="30" rows="10" maxLength="48" className="text-area"
                            placeholder="What's happening..." onChange={(e)=>{newText(e.target.value); console.log(text)}}></textarea>
                            
                            <br/>

                            <div className="status-message">
                                <FaGlobeAmericas className="Globe"/>    
                                <p className="status-text">Everyone Can Reply</p>
                            
                            </div>

                                <div className="image-outline">

                                    <div className="images">
                                        <GoFileMedia className="status-images Gallery" />
                                        <AiOutlineFileGif className="status-images" />
                                        <BiPoll className="status-images" />
                                        <VscSmiley className="status-images" />
                                        <AiOutlineSchedule className="status-images Gallery" />

                                    </div>   

                                    <input type="submit" value="Tweet" className="tweet-submit"/>                                

                                
                                </div>

                                
                                

                            
                                           
                        </form>

                                               

                    </div>

            </div>     
            
        </div>
    )
}

export default PostTweet;
