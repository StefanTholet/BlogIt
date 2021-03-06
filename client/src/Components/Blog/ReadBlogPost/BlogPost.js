import { today } from '../../services/blogService';
import Typography from '@material-ui/core/Typography';
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles(() => ({
    'post-title': {
        color: 'black',
        alignSelf: 'start',
    },
    'blog-container': {
        margin: '0 auto',
        marginTop: '2rem',
        maxWidth: '60%',
      
    },
    media: {
        width: '100%',
        minHeight: '400px',
        borderRadius: '5px'
    },
    'blog-content': {
        marginTop: '1rem',
        color: 'black'
    },
    divider: {
        width: '100%',
        marginBlock: '1rem'
    },
    'site-anchor': {
        textDecoration: 'underline'
    }
}))

const BlogPost = ({ post }) => {
    const classes = useStyles();
    return (
        <>
            <Grid container alignItems="center" spacing={4}
                className={classes['blog-container']}
                direction="column">
                <h1 className={classes['post-title']}>
                    {post.title}
                </h1>
                <AuthorAvatar image={post.authorImageUrl} author={post.author} createdOn={post.createdOn} />
                { post.imageUrl 
                ?
                <CardMedia
                    className={classes.media}
                    image={post?.imageUrl}
                    title={post?.title}
                />
                : 
                <CircularProgress />
                }
                    <div dangerouslySetInnerHTML={{__html: post.content}} style={{marginTop: "1rem", color: "black", width: "100%", alignText: "left"}} /> 
                <Divider className={classes.divider} variant="middle" />
                <Typography style={{ marginRight: 'auto', marginLeft: '1rem' }}>
                    Originally published at <Link to="/" className='site-anchor'>BlogIt</Link> on {today}.</Typography>
                <Divider className={classes.divider} variant="middle" />
            </Grid>
        </>
    );
}

export default BlogPost;