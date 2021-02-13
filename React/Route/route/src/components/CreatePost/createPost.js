import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

function createPost() {
    return (
        <div>
            <input placeholder="Please Enter Your Name"></input>
            <input placeholder="Please Enter Your Email ID"></input>
            <textarea placeholder="Please write your post here..!!"></textarea>
            <button>Save</button>
            <button>Post</button>
        </div>
    )
}

export default createPost;
