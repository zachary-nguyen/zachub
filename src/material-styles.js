import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    background: {
        background: '#2D2675',
    },
    button: {
        margin: theme.spacing(2),
        float: 'right',
        width: '10%'
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

export default useStyles;