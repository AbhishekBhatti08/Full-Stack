import React, { useState, useEffect } from 'react';
import { FaGlobeAmericas } from "react-icons/fa";
import { GoFileMedia } from "react-icons/go";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { VscSmiley } from "react-icons/vsc";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import './PostTweet.css';
import axios from 'axios';

function PostTweet() {

    const [text, newText] = useState(null);
    const [name, setName] = useState(null);
    const [stateApp, setAppState] = useState([]);

    useEffect(() => {

        let url = "http://localhost:4000/";
        axios.get(url)
            .then(res => {
                console.log(res)
                setAppState(res.data)
            })
            .catch(err => console.log(err))

    }, [setAppState]);

    console.log(stateApp);




    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
        let data = {
            tweet: text,
        };

        console.log(data);
        fetch('http://localhost:4000/postTweet', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(err => console.log(err));


        window.location.reload();

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
                    <img className="person" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-256.png" />
                </div>

                <div className="status">

                    <form onSubmit={handleSubmit}>

                        <textarea name="tweet" id="" cols="30" rows="10" maxLength="256" className="text-area"
                            placeholder="What's happening..." onChange={(e) => { newText(e.target.value); console.log(text) }}></textarea>

                        <br />

                        <div className="status-message">
                            <FaGlobeAmericas className="Globe" />
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

                            <input type="submit" value="Tweet" className="tweet-submit" />


                        </div>






                    </form>


                </div>

            </div>

            <div className="Tweets" >



                {

                    stateApp.map((item) => {

                        return <div className="outer-body">
                        
                        <div className="tweet-body">

                            <div>

                                <img className="person-tweet" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-256.png" />

                            </div>

                            <div className="tweet-sub">


                                <div>
                                    <div className="tweet-top">
                                        <p className="user-name">User_Name</p>
                                        <img className="check-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png" />
                                        <p className="user-name1" >@User_id</p>
                                    </div>

                                    <p key={item.id} className="tweet-content" >{item.tweet}</p>
                                    
                                   


                                </div>
                                
                            </div>
                           

                        </div>

                        <div className="tweet-bottom-icons">
                                        <FaRegComment className="tweet-bottom-icons-color" />
                                        <FaRetweet className="tweet-bottom-icons-color"/>
                                        <AiOutlineHeart className="tweet-bottom-icons-color"/>
                                        <FiShare className="tweet-bottom-icons-color"/>
                                    </div>


                    </div>        
                    })

                }


            </div>




        </div>
    )
}

export default PostTweet;
