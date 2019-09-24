import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Timeline from '../../components/Timeline/timeline';
import Portfolio from "../Portfolio/portfolio";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import Scroll from "react-scroll";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop({smooth:true});
};

const ContentTabs = (props) => {


    function handleMenuChange(event, newValue) {
        props.handleMenuChange(newValue);
    }

    return (
        <React.Fragment>
            <div id={'portfolio'}>
                <Tabs
                    value={props.selectedTab}
                    onChange={handleMenuChange}
                    indicatorColor="secondary"
                    centered
                >
                    <Tab label="Experience" {...a11yProps(0)} />
                    <Tab label="Portfolio" {...a11yProps(1)} />
                    <Tab label="Contact" {...a11yProps(2)} />
                </Tabs>
                <TabPanel className={'portfolio'} value={props.selectedTab} index={0}>
                    <Timeline/>
                </TabPanel>
                <TabPanel value={props.selectedTab} index={1}>
                    <Portfolio/>
                </TabPanel>
                <TabPanel value={props.selectedTab} index={2}>
                    <Portfolio/>
                </TabPanel>
                <div className="top">
                    <span id="to-top" onClick={scrollToTop}>
                        <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContentTabs;