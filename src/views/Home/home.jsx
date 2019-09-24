import React from 'react';
import Scroll from 'react-scroll';
import Navigation from '../../components/Navigation/navigation';
import AboutMe from '../../components/AboutMe/aboutMe';
import Skills from '../Skills/skills';
import ContentTabs from '../../components/ContentTabs/contentTabs';
import Language from '../../components/Language/Language';

const Home = () => {
  const [selectedTab, setSelectedTab] = React.useState(1);

  const scrollToNext = () => {
    Scroll.animateScroll.scrollTo(document.getElementById('main').offsetHeight, { smooth: true });
  };

  const handleMenuChange = (newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <React.Fragment>
      <section id={'main'} className={'main'}>
        <Navigation handleMenuChange={handleMenuChange}/>
        <div id={'content'}>
          <h1>Zachary Nguyen</h1>
          <a href={'#'} onClick={scrollToNext} className="btn-rounded-white">About Me</a>
          <a href="./ZacharyNguyenResume.pdf" download className="btn-rounded-white">Download CV</a>
        </div>
        {/* <div className={'overlay'}/> */}
        <div id="lead-down">
          <span onClick={scrollToNext}>
            <i className={'fa fa-chevron-down'} aria-hidden="true"/>
          </span>
        </div>
      </section>
      <AboutMe/>
      <Language/>
      <Skills/>
      <ContentTabs selectedTab={selectedTab} handleMenuChange={handleMenuChange}/>
    </React.Fragment>
  );
};

export default Home;
