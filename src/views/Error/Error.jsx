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
            <h2><b> ERROR 404 </b></h2>
            <p><b> Oh no! Page not found!</b></p>
            <Game options={options}/>
            <p><i>Forked from <a href={'https://github.com/LzxHahaha/react-dinosaur-game'}> https://github.com/LzxHahaha/react-dinosaur-game</a></i></p>
        </div>
    )
}