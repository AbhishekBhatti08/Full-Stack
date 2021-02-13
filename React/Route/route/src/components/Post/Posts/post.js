import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function post(props) {

    let data = props.post;
    console.log(data);

    return (
        <Link to="/post/">
        <div onClick={()=>props.onClick(props.post)} key={props.index}>
            {props.post}
        </div>
        </Link>
    )
}

export default post;
