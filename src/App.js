import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import Routes from "./components/Routes/routes";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    background: {
        background: '#2D2675',
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: 'inherit',

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 200,
            '&:focus': {
                width: 200,
            },
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

function App() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        open: false,
    });

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, open: open });
    };


    const sideList = () => {
        return(
            <List>
                {[{'All Repositories': '/all'}, {'Playground':'/playground'}, {'About Me':'/about'}, {'Contact Me':'/contact'}].map((text) => (
                    <ListItem className={'nav'}
                              component={Link}
                              to={Object.values(text)[0]}
                              key={Object.values(text)[0]}>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText className={'nav-button'} primary={Object.keys(text)[0]}/>
                    </ListItem>
                ))}
            </List>
        )

    }
    return (
      <React.Fragment>
          <Toolbar>
              <div className={'nav-container'}>
                  <MenuItem className={'nav-menu'} component={Link} to={'/all'}> Portfolio </MenuItem>
                  <MenuItem className={'nav-menu'} component={Link} to={'/playground'}> Playground </MenuItem>
                  <MenuItem className={'nav-menu'} component={Link} to={'/about'}> About </MenuItem>
                  <MenuItem className={'nav-menu'} component={Link} to={'/contact'}> Contact </MenuItem>
              </div>
          </Toolbar>
          <Routes/>
      </React.Fragment>
    );
}

export default App;
