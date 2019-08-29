import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import {PropTypes} from "prop-types";


const useStyles = makeStyles({
    card: {
        height: 400,
        position: 'relative',
        margin: '20px',
        minWidth: '400px'
    },

    center: {
        position: 'absolute',
        textAlign: 'center',
        bottom: 0,
        width: '100%'
    },
    top: {
        height: '90%',
    },
    btn: {
        width: '100%',
        bottom: 0
    },
    typography: {
        margin: 8,
    }
});

export default function RepositoryCard(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }



    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <Card className={classes.card}>
            <CardActionArea onClick={()=>window.open('https:/github.com/zachary-nguyen/' + props.repository,'_blank')} className={classes.top}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.repository}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.center}>
                <Button href={('https://github.com/zachary-nguyen/' + props.repository + '/archive/master.zip')} download className={classes.btn} size="small" color="primary">
                    Download
                </Button>
                <Button aria-describedby={id} onClick={handleClick} className={classes.btn} size="small" color="primary">
                    Clone
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}> <b>Use the following Url with Git or Svn to clone: </b> <br/> https://github.com/zachary-nguyen/{props.repository}.git</Typography>
                </Popover>
            </CardActions>
        </Card>
    );
}

RepositoryCard.propTypes = {
    repository: PropTypes.string,
    description: PropTypes.string
}
