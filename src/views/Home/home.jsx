import React from 'react'
import Scroll from 'react-scroll';
import Navigation from '../../components/Navigation/navigation'

const Home = () => {

    const scrollToNext = () => {
        Scroll.animateScroll.scrollTo(document.getElementById('main').offsetHeight,{smooth: true});
    };

    return(
        <div id={'main'} className={'main'}>
            <Navigation/>
            <div id={'content'} className={'content'}>
                <h1>Zachary Nguyen</h1>
                <h2>Software Engineer Student</h2>
                <a href={'#'} onClick={scrollToNext} className="btn-rounded-white">About Me</a>
                <a href="../../assets/ZacharyNguyenResume2020.pdf" download className="btn-rounded-white">Download CV</a>
            </div>
            <div className={'overlay'}/>
            <div id="lead-down">
                <span onClick={scrollToNext}>
                    <i className={'fa fa-chevron-down'} aria-hidden="true"/>
                </span>
            </div>
        </div>
    )
};

export default Home;