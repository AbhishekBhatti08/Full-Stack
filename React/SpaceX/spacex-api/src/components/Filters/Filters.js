import React from 'react';
import '../Filters/Filters.css';

function Filters(props) {
    
   
    return (
        <div className="filters">
            <h5 className="heading">Filters</h5>
            <h6 className="launchYear">Launch Year</h6>
            <hr></hr>

            <button id={props.api.launch_year} onClick={()=>onClick(props.api.launch_year)}>2006</button>
            <button >2007</button>
            <button>2008</button>
            <button>2009</button>
            <button>2010</button>
            <button>2011</button>
            <button>2012</button>
            <button>2013</button>
            <button>2014</button>
            <button>2015</button>
            <button>2016</button>
            <button>2017</button>
            <button>2018</button>
            <button>2019</button>
            <button>2020</button>



        </div>
    )
  
}

export default Filters;
