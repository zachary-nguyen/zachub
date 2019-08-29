import React from 'react';
import Game from './Game';
const options = {
    fps: 120,
    skySpeed: 50,
    groundSpeed: 200
}
export default function Error() {


    return(
        <div>
            <p> ERROR 404 </p>
            <p> Oh no! Page not found !</p>
            <Game options={options}/>
        </div>
    )
}