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
                            contentStyle={{border: '2px solid white', background: '#77A6B6', color: '#fff',boxShadow: '0px 2px 10px #77A6B6'}}
                            contentArrowStyle={{ borderRight: '7px solid white' }}
                            date={job.date}
                            iconStyle={{ background: '#e27d60', color: '#fff' }}
                            icon={<WorkIcon />}
                            key={i}
                        >
                            <h3 className="vertical-timeline-element-title">{job.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{job.location}</h4>
                            <p><i>{job.company}</i></p>
                            <p>{job.description1}</p>
                            <p>{job.description2}</p>
                            <p>{job.description3}</p>
                            <p>{job.description4}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
            );
};

export default Timeline;
