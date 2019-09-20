import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "@material-ui/icons/Work"
import * as experience from '../../assets/experience'

const Timeline = () =>{

    return(
            <div id={'timeline'}>
                <h2 className={'heading'}> Experience </h2>
                <VerticalTimeline>
                    {experience.jobs.map((job, i) => (
                        <VerticalTimelineElement
                            contentStyle={{ background: 'rgba(255, 177,171,0.7)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(255, 177, 171)' }}
                            date={job.date}
                            iconStyle={{ background: 'rgb(255, 177, 171)', color: '#fff' }}
                            icon={<WorkIcon />}
                            key={i}
                        >
                            <h3 className="vertical-timeline-element-title">{job.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{job.location}</h4>
                            <p>
                                {job.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
            );
};

export default Timeline;
