import React from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import './navBar.css';
function navBar() {
    return (
        <div>
            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            <NavLink exact to="/createPost" activeClassName="selected">Create Post</NavLink>
        </div>
    )
}

export default navBar;
