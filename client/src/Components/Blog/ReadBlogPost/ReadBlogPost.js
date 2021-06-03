
import BlogPost from './BlogPost';
import { getOnePost } from '../../services/blogService';
import HeroImage from '../../HeroImage/HeroImage';
import CommentsSection from '../Comments/CommentsSection';
import { useState, useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';

const ReadBlogPost = (props) => {
    const [post, setPost] = useState({});
    const { match, history } = props;
    const [user] = useContext(UserContext);

    //redirect if no user or token or fetch post
    useEffect(() => {
        if (!user) {
            history.push('/login')
        } else {
            const { postId } = match.params;
            getOnePost(postId)
                .then(res => res.json())
                .then(res => {
                    setPost((res));
                })
                .catch(err => console.log(err))
        }
    },
        []);

    return (
        <Grid container justifyContent="middle">
            <HeroImage image={`/blog.jpg`} />
            <BlogPost post={post} imageUrl={user?.imageUrl} />
            <CommentsSection post={post} user={user} />
        </Grid>
    );
}

export default withRouter(ReadBlogPost);