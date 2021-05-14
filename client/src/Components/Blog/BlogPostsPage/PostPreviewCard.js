import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { sendRequest } from '../../services/server';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '60rem',
        width: '400px',
        height: '397px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    'card-container': {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'center'
    },
    'card-footer': {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));


const PostPreviewCard = ({ blogData, user, setUser }) => {
 
    const [isFavorite, setFavorite] = useState(null)

    const { title, createdOnDate, imageUrl, altImage, content, _id } = blogData;

    useEffect(() => {
        if (user && user.favoritePosts) {
        setFavorite(user.favoritePosts.includes(_id))
    }
    }, [user])
    const classes = useStyles();

    const addPostToFavorites = (e, _id) => {
        e.preventDefault()
        if (isFavorite) {
            console.log('already in favorites')
            sendRequest(`/blog/${_id}/remove-post-from-favorites`,
                JSON.stringify({ userId: user._id }),
                ['POST', 'application/json'])
                .then(res => {
                    setUser(res)
                    setFavorite(false)
                })
                .catch(err => console.log(err))
            return;
        }
        sendRequest(`/blog/${_id}/add-post-to-favorites`,
            JSON.stringify({ userId: user._id }),
            ['POST', 'application/json'])
            .then(res => {
                setUser(res)
                setFavorite(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <Grid item className={classes['card-container']} xs={4}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
            </Avatar>
                    }
                    title={ReactHtmlParser(title)}
                    subheader={createdOnDate}
                />
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={altImage}
                    width={400}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {ReactHtmlParser(content)}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes['card-footer']}>
                    <IconButton aria-label="add to favorites" onClick={(e) => {
                        e.preventDefault()    
                        addPostToFavorites(e, _id)
                    }}>
                        <FavoriteIcon style={isFavorite ? { color: '#f50057' } : null} />
                    </IconButton>
                    <Button component={Link} to={`/blog/read-more/${_id}`}
                        style={{
                            backgroundColor: red[500], color: 'white'
                        }}
                    >Read more</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default PostPreviewCard
