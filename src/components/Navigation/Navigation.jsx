import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import {Link} from "react-router-dom";

const Navigation = () => {
    return(
        <div className={'nav-container'}>
            <MenuItem className={'nav-menu'} component={Link} to={'/'}> Home </MenuItem>
            <MenuItem className={'nav-menu'} component={Link} to={'/all'}> Portfolio </MenuItem>
            <MenuItem className={'nav-menu'} component={Link} to={'/playground'}> Playground </MenuItem>
            <MenuItem className={'nav-menu'} component={Link} to={'/about'}> About </MenuItem>
            <MenuItem className={'nav-menu'} component={Link} to={'/contact'}> Contact </MenuItem>
        </div>
    );
}

export default Navigation;