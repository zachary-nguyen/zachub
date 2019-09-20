import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "@material-ui/icons/Work"
import SchoolIcon from "@material-ui/icons/School"
import StarIcon from "@material-ui/icons/Star"

const Timeline = () =>{
    return(
            <div id={'timeline'}>
                <h2 className={'heading'}> Experience </h2>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--go"
                        contentStyle={{ background: 'rgba(255, 177,171,0.7)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 177, 171)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(255, 177, 171)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--go"
                        contentStyle={{ background: 'rgba(255, 177,171,0.7)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 177, 171)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(255, 177, 171)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--go"
                        contentStyle={{ background: 'rgba(255, 177,171,0.7)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 177, 171)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(255, 177, 171)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--go"
                        contentStyle={{ background: 'rgba(255, 177,171,0.7)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 177, 171)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(255, 177, 171)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--go"
                        contentStyle={{ background: 'rgba(255, 177,171,0.7)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 177, 171)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(255, 177, 171)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            );
};

export default Timeline;
