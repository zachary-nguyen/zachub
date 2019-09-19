import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Social = () => {

    return(
        <div className={'social'}>
            <a href="https://github.com/zachary-nguyen" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://github.com/zachary-nguyen" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://github.com/zachary-nguyen" target="_blank"><FontAwesomeIcon icon={faDiscord}/></a>
        </div>
    )
};

export default Social;