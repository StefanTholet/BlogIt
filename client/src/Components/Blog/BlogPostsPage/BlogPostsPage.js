import PostPreviewCard from './PostPreviewCard';
import { useState, useEffect, useContext } from 'react';
import { getPosts } from '../../services/blogService';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import SectionHeader from '../Sections/SectionHeader'
const useStyles = makeStyles({
    "blog-posts-container": {
        display: "flex",
        flexWrap: "wrap",
    },
    "category-sections": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    }
})


const BlogPostsPage = ({ history }) => {

    const [user, setUser] = useContext(UserContext)

    const [lifestylePosts, setLifestylePosts] = useState([])
    const [foodPosts, setFoodPosts] = useState([])
    const [sportsPosts, setSportsPosts] = useState([])

    useEffect(() => {
        getPosts()
            .then(result => result.json())
            .then(allPosts => {
                setLifestylePosts(filterPosts(allPosts, 'Lifestyle'));
                setFoodPosts(filterPosts(allPosts, 'Food'));
                setSportsPosts(filterPosts(allPosts, 'Sports'));
            })
            .catch(err => console.log(err))
    }, []);

    const filterPosts = (allPosts, typeOfPost) => {
      return allPosts.filter(x => x.category === typeOfPost);
    }
    const classes = useStyles();

    console.log(lifestylePosts)
    return (
        <>
            <div className={classes["category-sections"]}>
                {lifestylePosts
                    ?
                    <SectionHeader sectionName={'Lifestyle'}>
                        {lifestylePosts.map(post => <PostPreviewCard blogData={post} key={post.title + post._id} user={user} setUser={setUser} />
                        )}
                    </SectionHeader>
                    :
                    null
                }
                <SectionHeader sectionName={'Food'}>

                </SectionHeader>
                <SectionHeader sectionName={'Sports'}>

                </SectionHeader>
            </div>
            {/* <Grid className={classes['blog-posts-container']}>
                {blogPosts.map(post => <PostPreviewCard blogData={post} key={post.title + post._id} user={user} setUser={setUser} />
                )}
            </Grid> */}
        </>
    );
}

export default withRouter(BlogPostsPage);