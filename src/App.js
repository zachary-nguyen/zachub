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
import {Switch,Route} from 'react-router';
import {Link} from 'react-router-dom';
import HomePage from './views/homePage'
import ContactMe from './views/contactMe'
import AboutMe from './views/aboutMe'
import Compiler from './views/compiler'
import Error from './views/Error/Error'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    background: {
        background: '#2D2675',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
                {[{'All Repositories': '/'}, {'Compiler':'/compiler'}, {'About Me':'/about'}, {'Contact Me':'/contact'}].map((text) => (
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
              <div className={classes.root}>
                  <AppBar className={classes.background} position="static">
                      <Toolbar>
                          <IconButton
                              edge="start"
                              className={classes.menuButton}
                              color="inherit"
                              aria-label="open drawer"
                              onClick={toggleDrawer(true)}
                          >
                              <MenuIcon />
                          </IconButton>
                          <Drawer open={state.open} onClose={toggleDrawer( false)}>
                              <div
                                  className={classes.list}
                                  role="presentation"
                                  onClick={toggleDrawer( false)}
                                  onKeyDown={toggleDrawer( false)}
                              >
                                  {sideList()}
                              </div>
                          </Drawer>
                          <Typography align={'left'} className={classes.title} variant="h6" noWrap>
                              <img src="codehublogo.png" alt="logo" height={'50'} width={'10%'}/>
                          </Typography>
                          <div className={classes.search}>
                              <div className={classes.searchIcon}>
                                  <SearchIcon />
                              </div>
                              <InputBase
                                  placeholder="Search for a repository…"
                                  classes={{
                                      root: classes.inputRoot,
                                      input: classes.inputInput,
                                  }}
                                  inputProps={{ 'aria-label': 'search' }}
                              />
                          </div>
                      </Toolbar>
                  </AppBar>
              </div>
              <Switch>
                  <Route path='/' exact component={HomePage}/>
                  <Route path='/about'  component={AboutMe}/>
                  <Route path='/contact'  component={ContactMe}/>
                  <Route path='/compiler'  component={Compiler}/>
                  <Route component={Error}/>
              </Switch>
      </React.Fragment>
    );
}

export default App;
