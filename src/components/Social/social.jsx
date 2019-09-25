import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

import './social.css';

const Social = (props) => {
  return (
    <div className={props.class}>
      <a href="https://github.com/zachary-nguyen" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon size={props.size} icon={faGithub}/></a>
      <a href="https://github.com/zachary-nguyen" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon size={props.size} icon={faLinkedin}/></a>
      <a href="mailto:zack.nguyen@hotmail.com"><FontAwesomeIcon size={props.size} icon={faEnvelope}/></a>
    </div>
  );
};

Social.propTypes = {
  class: PropTypes.string,
  size: PropTypes.string
};

export default Social;
