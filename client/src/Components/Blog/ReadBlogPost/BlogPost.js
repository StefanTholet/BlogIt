import { today } from '../../services/bookService';
import Typography from '@material-ui/core/Typography';
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    'post-title': {
        color: 'black',
        alignSelf: 'start',
        fontSize: '1.4rem'
    },
    'blog-container': {
        margin: '0 auto',
        marginTop: '2rem',
        maxWidth: '40%'
    },
    media: {
        width: '100%',
        height: '250px',
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
    // console.log(post)
    return (
        <>
            <Grid container alignItems="center" spacing={4}
                className={classes['blog-container']}
                direction="column">
                <Typography variant='h3' className={classes['post-title']}>
                    {post.title}
                </Typography>
                <AuthorAvatar image={post.authorImageUrl} author={post.author} createdOn={post.createdOn} />
                <CardMedia
                    className={classes.media}
                    image={post.imageUrl}
                    title={post.title}
                />
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