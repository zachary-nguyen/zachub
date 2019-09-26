import React from 'react';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import {FaReact, FaJs} from "react-icons/all";
import './languages.css';

const Language = () => {
  return (
    <section id={'languages'}>
      <h2 className="heading">Languages</h2>
      <Card className={'language-card flip-card'}>
        <div className="flip-card-inner">
          <CardContent className={'language-card-ctn flip-card-front'}>
            <p><i>I speak ...</i></p>
            <div className={'language-block'}>
              <p><b>English (oral/written)</b></p>
              <LinearProgress variant="determinate" value={100} />
              <p><i> Native </i></p>
            </div>
            <div className={'language-block'}>
              <p><b> French (oral/written) </b></p>
              <LinearProgress color={'secondary'} variant="determinate" value={100} />
              <p><i> Native </i></p>
            </div>
          </CardContent>
          <CardContent className={'language-card-ctn flip-card-back'}>
            <p><i>Current favorite language/framework...</i></p>
            <div>
              <FaJs size={100} color={'#F0DB4F'}/>
              <p>+</p>
              <FaReact size={100} color={'#00d8ff'}/>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
};

export default Language;
