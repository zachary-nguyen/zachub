import React from 'react';
import {Link} from 'react-router-dom'
import Social from "../Social/social";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';

const Navigation = () => {
    const [state, setState] = React.useState({
        open: false,
    });

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, open: open });
    };


    const sideList = () => {
        return(
            <List className={'hamburger-content'}>
                {[{'Portfolio': '/'}, {'Playground':'/playground'}, {'Contact':'/contact'}].map((text) => (
                    <ListItem className={'hamburger-item'}
                              component={Link}
                              to={Object.values(text)[0]}
                              key={Object.values(text)[0]}>
                        <ListItemText className={'nav-button'} primary={Object.keys(text)[0]}/>
                    </ListItem>
                ))}
            </List>
        )
    };

    return(
        <React.Fragment>
            <IconButton onClick={toggleDrawer(true)} id={'hamburger-menu'} edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Drawer  anchor={'top'} open={state.open} onClose={toggleDrawer( false)}>
                <div
                    className={'hamburger-drawer'}
                    role="presentation"
                    onClick={toggleDrawer( false)}
                    onKeyDown={toggleDrawer( false)}
                >
                    {sideList()}
                </div>
            </Drawer>
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