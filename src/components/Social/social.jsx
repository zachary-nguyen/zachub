import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div className={'social'}>
      <a href="https://github.com/zachary-nguyen" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
      <a href="https://github.com/zachary-nguyen" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
      <a href="https://github.com/zachary-nguyen" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faDiscord}/></a>
      <a href="mailto:zack.nguyen@hotmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
    </div>
  );
};

export default Social;
