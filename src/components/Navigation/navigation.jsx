import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Social from '../Social/social';
import Menu from '../Menu/menu';
import PropTypes from 'prop-types';

const Navigation = (props) => {
  const handleMenuChange = (e, miniMenu) => {
    if (miniMenu) {
      props.handleMenuChange(Number(e));
    } else {
      props.handleMenuChange(Number(e.target.name));
    }
  };

  return (
    <React.Fragment>
      <Menu handleMenuChange={handleMenuChange}/>
      <div id={'nav-menu'}>
        <Link className={'nav-menu-a'} onClick={handleMenuChange} name={0} to={'portfolio'} ignoreCancelEvents smooth={true}>Experience</Link>
        <Link className={'nav-menu-a'} onClick={handleMenuChange} name={1} to={'portfolio'} ignoreCancelEvents smooth={true}>Portfolio</Link>
        <RouterLink className={'nav-menu-a'} to={'/playground'}>Playground</RouterLink>
        <Link className={'nav-menu-a'} name={2} onClick={handleMenuChange} to={'portfolio'} ignoreCancelEvents smooth={true}>Contact</Link>
        <RouterLink className={'nav-menu-a'} to={'/game'}> Game </RouterLink>
        <Social/>
      </div>
    </React.Fragment>
  );
};

Navigation.propTypes = {
    handleMenuChange: PropTypes.function
};

export default Navigation;
