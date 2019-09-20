import React, {useEffect} from "react";
import axios from 'axios';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component/dist-es6";
import WorkIcon from "@material-ui/icons/Work";
import * as experience from "../../assets/experience";

function AllRepositories() {
    const [repositories, setRepositories] = React.useState(null);

    useEffect( ()  => {
            axios.get('https://api.github.com/users/zachary-nguyen/repos')
            .then(result => result.data)
            .then(data => setRepositories(data))
            .catch(err => console.log(err));
    },[]);

    //@returns {function}
    return(
        repositories === null ? null :
        <React.Fragment>
            <h1> Portfolio </h1>
            <VerticalTimeline>
                {repositories.map((repo, i) => (
                    <VerticalTimelineElement
                        contentStyle={{ background: 'rgba(255, 177,171,0.7)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 177, 171)' }}
                        date={''}
                        iconStyle={{ background: 'rgb(255, 177, 171)', color: '#fff' }}
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
            </VerticalTimeline>
        </React.Fragment>
    )
}

export default AllRepositories