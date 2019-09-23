import React, {useEffect} from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component/dist-es6";
import WorkIcon from "@material-ui/icons/Work";

const Portfolio = () => {
    const [repositories, setRepositories] = React.useState(null);

    useEffect( ()  => {
            fetch('https://api.github.com/users/zachary-nguyen/repos')
            .then(result => result.json())
            .then(data => setRepositories(data))
            .catch(err => console.log(err));
    },[]);

    //@returns {function}
    return(
        <React.Fragment>
            <h1 className={'heading-white'}> Portfolio </h1>
            {repositories ?
                <VerticalTimeline>
                    {repositories.map((repo, i) => (
                        <VerticalTimelineElement
                            contentStyle={{border: '2px solid white', background: '#77A6B6', color: '#fff',boxShadow: '0px 2px 10px #77A6B6'}}
                            contentArrowStyle={{borderRight: '7px solid  white'}}
                            date={''}
                            iconStyle={{background: '#e27d60', color: '#fff'}}
                            icon={<WorkIcon/>}
                            key={i}
                        >
                            <h3 className="vertical-timeline-element-title">{repo.name}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{'Ottawa'}</h4>
                            <p>
                                {repo.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline> : null
            }
        </React.Fragment>
    )
};

export default Portfolio;