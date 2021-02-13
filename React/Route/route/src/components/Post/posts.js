import React from 'react'
import Post from './Posts/post';
import { BrowserRouter, Route, Link } from "react-router-dom";

function posts(props) {
    return (

        <div>
            {
                props.post.map((post) => {
                    return (
                        <div>
                            <Post post={post}/>
                        </div>

                    )
                })
            }
        </div>

    )

}

export default posts;
