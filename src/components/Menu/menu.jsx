import React from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";

const Menu = () => {

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
                {[{'Portfolio': '/all'}, {'Playground':'/playground'}, {'Contact':'/contact'}].map((text) => (
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

    return (
        <React.Fragment>
            <IconButton onClick={toggleDrawer(true)} id={'hamburger-menu'} edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Drawer anchor={'top'} open={state.open} onClose={toggleDrawer( false)}>
                <div
                    className={'hamburger-drawer'}
                    role="presentation"
                    onClick={toggleDrawer( false)}
                    onKeyDown={toggleDrawer( false)}
                >
                    {sideList()}
                </div>
            </Drawer>
        </React.Fragment>
    )
};

export default Menu;