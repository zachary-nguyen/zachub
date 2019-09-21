import React from 'react';
import {Link} from 'react-scroll'
import Social from "../Social/social";
import Menu from "../Menu/menu";

const Navigation = () => {

    return(
        <React.Fragment>
            <Menu/>
            <div id={'nav-menu'}>
                <Link className={'nav-menu-a'} to={'portfolio'} smooth={true}>Portfolio</Link>
                <Link className={'nav-menu-a'} to={'/playground'}>Playground</Link>
                <Link className={'nav-menu-a'} to={'portfolio'} smooth={true}>Contact</Link>
                <Social/>
            </div>
        </React.Fragment>
    );
};

export default Navigation;