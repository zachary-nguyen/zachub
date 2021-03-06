import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Social from '../Social/social';
import Menu from '../Menu/menu';
import PropTypes from 'prop-types';
import './navigation.css';

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
        <Link className={'nav-menu-a'} onClick={handleMenuChange} name={0} to={'content-tabs'} ignoreCancelEvents smooth={true}>Experience</Link>
        <Link className={'nav-menu-a'} onClick={handleMenuChange} name={1} to={'content-tabs'} ignoreCancelEvents smooth={true}>Portfolio</Link>
        <RouterLink className={'nav-menu-a'} to={'/playground'}>Playground</RouterLink>
        <Link className={'nav-menu-a'} to={'contact'} ignoreCancelEvents smooth={true}>Contact</Link>
        <RouterLink className={'nav-menu-a'} to={'/game'}> Game </RouterLink>
        <Social size={'sm'} class={'social'}/>
      </div>
    </React.Fragment>
  );
};

Navigation.propTypes = {
    handleMenuChange: PropTypes.func
};

export default Navigation;
