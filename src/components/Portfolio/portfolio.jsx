import React, {useEffect} from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component/dist-es6";
import {FaReact, FaJava, FaJs, FaHtml5, FaPython} from 'react-icons/fa';
import Chip from '@material-ui/core/Chip';
import 'react-vertical-timeline-component/style.min.css';


const Technology = (props) => {
    const [technologies,setTechnologies] = React.useState(null);
    useEffect( ()  => {
        fetch(`https://api.github.com/repos/zachary-nguyen/${props.repo}/languages`)
            .then(result => result.json())
            .then(data => setTechnologies(Object.keys(data)))
            .catch(err => console.log(err));
    },[]);

    return (
        <React.Fragment>
            {technologies ?
                (technologies.map((tech,i)=>(
                    <Chip label={tech} key={i}/>
                    ))):null}
        </React.Fragment>
    )
};


const Portfolio = () => {
    const [repositories, setRepositories] = React.useState(null);

    useEffect( ()  => {
            fetch('https://api.github.com/users/zachary-nguyen/repos')
            .then(result => result.json())
            .then(data => setRepositories(data))
            .catch(err => console.log(err));
    },[]);

    return(
        <React.Fragment>
            <h1 className={'heading'}> Portfolio </h1>
            <p> Projects I have created or contributed to! </p>
            {repositories ?
                <VerticalTimeline>
                    {repositories.map((repo, i) => (
                        <VerticalTimelineElement
                            contentStyle={{border: '2px solid white', background: 'white', color: 'black',boxShadow: '0px 2px 10px #77A6B6'}}
                            contentArrowStyle={{borderRight: '7px solid  white'}}
                            date={''}
                            iconStyle={{background: '#00d8ff', color: '#fff'}}
                            icon={<FaJava/>}
                            key={i}
                        >
                            <h3 className="vertical-timeline-element-title">{repo.name}</h3>
                            <p className={'desc-text'}>
                                {repo.description}
                            </p>
                            <Technology repo={repo.name}/>
                            <br/>
                            <a href={'https://github.com/zachary-nguyen/'+ repo.name} target={'_blank'} className="btn-rounded-white">View Source</a>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline> : null
            }
        </React.Fragment>
    )
};

export default Portfolio;