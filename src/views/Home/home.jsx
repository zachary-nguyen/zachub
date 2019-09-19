import React from 'react'
import Scroll from 'react-scroll';
import Navigation from '../../components/Navigation/navigation'
import AboutMe from "../AboutMe/aboutMe";
import Skills from "../Skills/skills";

const Home = () => {

    const scrollToNext = () => {
        Scroll.animateScroll.scrollTo(document.getElementById('main').offsetHeight,{smooth: true});
    };

    const scrollToTop = () => {
        Scroll.animateScroll.scrollToTop({smooth:true});
    };

    return(
        <React.Fragment>
            <div id={'main'} className={'main'}>
                <Navigation/>
                <div id={'content'}>
                    <h1>Zachary Nguyen</h1>
                    <a href={'#'} onClick={scrollToNext} className="btn-rounded-white">About Me</a>
                    <a href="./ZacharyNguyenResume2020.pdf" download className="btn-rounded-white">Download CV</a>
                </div>
                <div className={'overlay'}/>
                <div id="lead-down">
                <span onClick={scrollToNext}>
                    <i className={'fa fa-chevron-down'} aria-hidden="true"/>
                </span>
                </div>
            </div>
            <AboutMe/>
            <Skills/>

            <div className="top">
                <span id="to-top" onClick={scrollToTop}>
                    <i className="fa fa-chevron-up" aria-hidden="true"></i>
                </span>
            </div>
        </React.Fragment>
    )
};

export default Home;