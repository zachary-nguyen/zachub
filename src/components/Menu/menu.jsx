import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import './menu.css';
import Social from "../Social/social";

const Menu = (props) => {
  const [state, setState] = React.useState({
    open: false
  });

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, open: open });
  };

  const scrollToElement = (tab) => {
    const s = tab.currentTarget.name;
    s !== 'contact' ? props.handleMenuChange(s, true) : null;
    setState({ ...state, open: false });
  };

  return (
    <React.Fragment>
      <IconButton onClick={toggleDrawer(true)} id={'hamburger-menu'} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer anchor={'top'} open={state.open} onClose={toggleDrawer(false)}>
        <div
          className={'hamburger-drawer'}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List className={'hamburger-content'}>
            <ListItem className={'hamburger-item'}
              to={'portfolio'}
              component={Link}
              name={0}
              onClick={scrollToElement}
              ignoreCancelEvents
              smooth={true}>
              <ListItemText className={'nav-button'} primary={'Experience'}/>
            </ListItem>
            <ListItem className={'hamburger-item'}
              to={'portfolio'}
              name={1}
              component={Link}
              onClick={scrollToElement}
              ignoreCancelEvents
              smooth={true}>
              <ListItemText name={1} className={'nav-button'} primary={'Portfolio'}/>
            </ListItem>
            <ListItem className={'hamburger-item'}
              component={RouterLink}
              to={'/playground'}>
              <ListItemText className={'nav-button'} primary={'Playground'}/>
            </ListItem>
            <ListItem className={'hamburger-item'}
              to={'contact'}
              component={Link}
              name={'contact'}
              onClick={scrollToElement}
              ignoreCancelEvents
              smooth={true}>
              <ListItemText className={'nav-button'} primary={'Contact'}/>
            </ListItem>
            <ListItem className={'hamburger-item'}
              component={RouterLink}
              to={'/game'}>
              <ListItemText className={'nav-button'} primary={'Game'}/>
            </ListItem>
            <ListItem className={'hamburger-item '}>
              <Social size={'5x'} class={'social-mini'}/>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

Menu.propTypes = {
  handleMenuChange: PropTypes.func
};

export default Menu;
