import React from 'react';
import './about.css';

function AboutMe () {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="heading">About Me</h2>
          </div>
          <div className="col-md-8">
            <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Hey I'm Zachary Nguyen, a third year Software Engineering student at Carleton University (Ottawa, Canada). I'm a passionate developer always looking for a new challenge
                            and love putting my skills to test. This is a small portfolio website developed with ReactJs just showcasing some of my latest work and some information to get to know me.
                            If you have any questions regarding the website or looking for some help on a project (open source or not) feel free to contact me via the link at the bottom.
            </p>
            <a href={'https://github.com/zachary-nguyen/zachub'} rel={"noreferrer"} target={'_blank'} className="view-src">View Portfolio Source Code</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
