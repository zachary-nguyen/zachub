import React from 'react';
import './contactme.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
      <footer id={'contact'}>
          <h1 className={'heading'}> Contact Me </h1>
          <p> Want to work together? Contact me and we can chat! </p>
          <FontAwesomeIcon onClick={()=>{window.location.href =('mailto:zack.nguyen@hotmail.com')}} size={'x10'} icon={faEnvelope}/>
      </footer>
  );
};

export default ContactMe;
