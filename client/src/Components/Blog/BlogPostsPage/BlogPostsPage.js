import PostPreviewCard from './PostPreviewCard';
import { useState, useEffect, useContext } from 'react';
import { getPosts } from '../../services/blogService';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { decodeBlogPost } from '../../services/blogService'
import UserContext from '../../Contexts/UserContext';
const useStyles = makeStyles({
    "blog-posts-container": {
        display: "flex",
        flexWrap: "wrap",
    }
})


const BlogPostsPage = ({ history }) => {

    const [user, setUser] = useContext(UserContext)
    const [blogPosts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then(result => result.json())
            .then(allPosts => {
                const decodedPosts = allPosts.map(post => {
                    return decodeBlogPost(post);
                })
                setPosts(decodedPosts)
            })
            .catch(err => console.log(err))
    }, []);
    const classes = useStyles();
    return (
        <>
            <Grid  alignItems="center" className={classes['blog-posts-container']}>
                {blogPosts.map(post => <PostPreviewCard blogData={post} key={post.title + post._id} user={user} setUser={setUser} />
                )}
            </Grid>
        </>
    );
}

export default withRouter(BlogPostsPage);