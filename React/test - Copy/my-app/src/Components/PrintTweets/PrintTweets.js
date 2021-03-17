import {React, useEffect, useState} from 'react';

function PrintTweets() {

    const [stateApp, setAppState] = useState(null);

    useEffect(() => {
        
        let url = "http://localhost:4000/";
        fetch(url).then((res)=> res.json())
        .then((res)=>setAppState(res))

    }, [])

    console.log(stateApp);

    let Output = stateApp; 

    let arr= [Output]

    return (
        <div>

            arr.map(function(item){
                <li>{arr.tweet}</li>

            })

            )
            
        </div>
    )
}

export default PrintTweets;
