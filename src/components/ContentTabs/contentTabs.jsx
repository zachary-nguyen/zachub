import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Timeline from '../../components/Timeline/timeline';
import Portfolio from "../../views/Portfolio/portfolio";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'

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


const ContentTabs = () => {

    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <React.Fragment>
            <Tabs
                id={'portfolio'}
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                centered
                textColor="secondary"
            >
                <Tab label="Experience" {...a11yProps(0)} />
                <Tab label="Portfolio" {...a11yProps(1)} />
                <Tab label="Contact" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Timeline/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Portfolio/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Portfolio/>
            </TabPanel>
        </React.Fragment>
    );
}

export default ContentTabs;