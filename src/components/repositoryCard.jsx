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
import PropTypes from "prop-types";


const useStyles = makeStyles({
    card: {
        maxWidth: 476,
    },
    media: {
        height: 140,
    },
    center: {
        textAlign: 'center',
    },
    btn: {
        width: '100%',
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
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Repository
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.center}>
                <Button href={('https://github.com/zachary-nguyen/' + props.repository + '/archive/master.zip')} download className={classes.btn} size="small" color="primary">
                    Download
                </Button>
                <Button className={classes.btn} size="small" color="primary">
                    View Repository
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
    repository: PropTypes.string
}
