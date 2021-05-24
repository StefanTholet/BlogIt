import styles from './blogPostsPage.module.css';
import PostPreviewCard from './PostPreviewCard';
import { useState, useEffect, useContext } from 'react';
import { getPosts } from '../../services/blogService';
import { withRouter } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import SectionHeader from '../Sections/SectionHeader'



const BlogPostsPage = ({ history }) => {

    const [user, setUser] = useContext(UserContext)
    const [posts, setPosts] = useState([]);
    const [lifestylePosts, setLifestylePosts] = useState([])
    const [foodPosts, setFoodPosts] = useState([])
    const [sportsPosts, setSportsPosts] = useState([])

    useEffect(() => {
        getPosts()
            .then(result => result.json())
            .then(allPosts => {
                setPosts(allPosts)
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        setLifestylePosts(filterPosts(posts, 'Lifestyle'));
        setFoodPosts(filterPosts(posts, 'Food'));
        setSportsPosts(filterPosts(posts, 'Sports'));
    }, [posts])


    const filterPosts = (allPosts, typeOfPost) => {
        const filteredArray = allPosts.filter(x => x.category === typeOfPost);
        return filteredArray
    }

    return (
        <>
            <div className={styles["category-sections"]}>
                <SectionHeader sectionName={'Lifestyle'} />
                <div className={styles['blog-posts-container']}>
                    {
                        lifestylePosts.length > 0 ?
                            lifestylePosts.map(post => <PostPreviewCard blogData={post} key={post.title + post._id} user={user} setUser={setUser} />)
                            : null
                    }
                </div>
                {/* <RedBottomBorder width={"100%"} /> */}
                <SectionHeader sectionName={'Food'} />
                <div className={styles['blog-posts-container']}>
                    {
                        foodPosts ?
                            foodPosts.map(post => <PostPreviewCard blogData={post} key={post.title + post._id} user={user} setUser={setUser} />)
                            : null
                    }
                </div>
                <SectionHeader sectionName={'Sports'} />
                <div className={styles['blog-posts-container']}>
                {
                    sportsPosts ?
                    sportsPosts.map(post => <PostPreviewCard blogData={post} key={post.title + post._id} user={user} setUser={setUser} />)
                        : null
                }
                </div>
            </div>
        </>
    );
}

export default withRouter(BlogPostsPage);