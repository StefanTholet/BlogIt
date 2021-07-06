import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
    media: {
        marginTop: '2rem',
        borderRadius: '5px',
        width: '100%',
        height: '100%',
    },
    'carousel-container': {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        height: '40%',
        margin: '0 auto',
        marginTop: '2rem',
        alignItems: 'center'
    },
    'image-container': {
        display: 'flex',
        width: '100%',
        height: '100%',
        margin: '0 auto',
        alignItems: 'center'
    },
    'room-counter': {
        marginTop: '2rem',
        border: '1px solid lightGrey',
        padding: '2px 10px',
        borderRadius: '5px'
    }
}))

const rooms = [
    { 'Single Bedroom': 'singleBedroom.jpg' },
    { 'Double Bedroom': 'doubleBedroom.jpg' },
    { 'Tiple Bedroom': 'tripleBedroom.jpg' }
]

const Carousel = () => {
    const classes = useStyles()
    const [roomIndex, setRoomIndex] = useState(0);

    const currentBedroomType = Object.keys(rooms[roomIndex])
    const currentPicture = Object.values(rooms[roomIndex])

    const onForwardArrowClickHandler = () => {
        if (roomIndex + 1 === rooms.length) {
            return setRoomIndex(0);
        }
        setRoomIndex(currentIndex => currentIndex + 1)
    }

    const onBackwardArrowClickHandler = () => {
        if (roomIndex === 0) {
            return setRoomIndex(rooms.length - 1);
        }
        setRoomIndex(currentIndex => currentIndex - 1)
    }

    return (
        <Grid className={classes['carousel-container']}>
            <Typography variant='h5'>{currentBedroomType}</Typography>
            <Grid className={classes['image-container']}>
                <IconButton onClick={onBackwardArrowClickHandler}>
                    <ArrowBackIosIcon fontSize="large" />
                </IconButton>
                <CardMedia
                    className={classes.media}
                    image={currentPicture}
                />
                <IconButton onClick={onForwardArrowClickHandler}>
                    <ArrowForwardIosIcon fontSize="large" />
                </IconButton>
            </Grid>
            <Grid className={classes['room-counter']}>
                <span>{roomIndex + 1}</span>
                <span>/</span>
                <span>{rooms.length}</span>
            </Grid>
        </Grid>
    );
}

export default Carousel