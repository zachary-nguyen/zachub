import React from 'react';
import {Link} from 'react-router-dom'
import Social from "../Social/social";
import Menu from "../Menu/menu";

const Navigation = () => {

    return(
        <React.Fragment>
            <Menu/>
            <div id={'nav-menu'}>
                <Link className={'nav-menu-a'} to={'/all'}>Portfolio</Link>
                <Link className={'nav-menu-a'} to={'/playground'}>Playground</Link>
                <Link className={'nav-menu-a'} to={'/contact'}>Contact</Link>
                <Social/>
            </div>
        </React.Fragment>
    );
};

export default Navigation;