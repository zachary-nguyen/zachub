import React from 'react';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';
import * as Languages from '../../assets/skills';
import './skills.css';

const Skill = (props) => {

  const [flip,setFlip] = React.useState(false);

  const onMouseOver = () =>{
    setFlip(!flip);
  };

  return(
      <ReactCardFlip isFlipped={flip} infinite={true} flipDirection="horizontal">
        <div onMouseOver={onMouseOver} className={'skill-front'} key={'front'}>{props.name}</div>
        <div onMouseOver={onMouseOver} className={'skill-back'} key={'back'}>{props.name}</div>
      </ReactCardFlip>
  );
};


const Skills = () => {
  return (
    <section id="skills">
      <h2 className="heading">Skills</h2>
      <ul>
        {Languages.skills.map((language,i)=>(
            <li key={i}>
                <Skill key={i} name={language}/>
            </li>
        ))}
      </ul>
    </section>
  );
};

Skill.propTypes = {
  name: PropTypes.object
};

export default Skills;
