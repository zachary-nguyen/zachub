import React from 'react';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';
import * as skills from './skills';

const Skill = (props) => {

  const [flip,setFlip] = React.useState(false);

  const onMouseOver = () =>{
    console.log(flip);
    setFlip(!flip);
  };

  return(
      <ReactCardFlip isFlipped={flip} infinite={true} flipDirection="horizontal">
        <div onMouseOver={onMouseOver} className={'skill-front'} key={'front'}>{props.name}</div>
        <div onMouseOver={onMouseOver} className={'skill-back'} key={'back'}>{props.name}</div>
      </ReactCardFlip>
  )
};


const Skills = () => {
  return (
    <section id="skills">
      <h2 className="heading">Skills</h2>
      <ul>
        {skills.skills.map((language,i)=>(
            <li key={i}>
                <Skill key={i} name={language}/>
            </li>
        ))}
      </ul>
    </section>
  );
};

Skill.propTypes = {
  name: PropTypes.String
};
export default Skills;
