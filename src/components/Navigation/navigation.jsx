import React from 'react';
import {Link} from 'react-router-dom'
import Social from "../Social/social";

const Navigation = () => {
    return(
        <div id={'nav-menu'}>
            <Link to={'/all'}>Portfolio</Link>
            <Link to={'/playground'}>Playground</Link>
            <Link to={'/contact'}>Contact</Link>
            <Social/>
        </div>
    );
};

export default Navigation;