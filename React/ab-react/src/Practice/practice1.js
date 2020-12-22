import React from "react";

import "../Practice/practice1.css";

function Practice1 (props) {
return <div className="practice1">
<p> {props.name}</p>
<p> {props.age}</p>
<input onChange= {props.changed}></input>
        
</div>
}

export default Practice1;
