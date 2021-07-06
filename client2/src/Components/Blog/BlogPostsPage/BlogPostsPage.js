import styles from './blogPostsPage.module.css';
import { useState, useEffect, useContext } from 'react';
import { getPosts } from '../../services/blogService';
import { withRouter } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import SectionHeader from '../Sections/SectionHeader'
import TopSection from '../Sections/TopSection';
import BottomSection from '../Sections/BottomSection';


const BlogPostsPage = ({ history }) => {

    const [user, setUser] = useContext(UserContext)
    const [posts, setPosts] = useState([]);
    const [lifestylePosts, setLifestylePosts] = useState([])
    const [foodPosts, setFoodPosts] = useState([])
    const [travelPosts, setTravelPosts] = useState([])
    const [fashionPosts, setFashionPosts] = useState([])

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
        setFashionPosts(filterPosts(posts, 'Fashion'));
        setTravelPosts(filterPosts(posts, 'Travel'));
    }, [posts])

    console.log(travelPosts)
    const filterPosts = (allPosts, typeOfPost) => {
        const filteredArray = allPosts.filter(x => x.category === typeOfPost);
        return filteredArray
    }

    return (
        <div className={styles["category-sections"]}>
            <div className={styles['top-section-container']}>
                <div className={styles['top-container']}>
                    <SectionHeader sectionName={'Lifestyle'} />
                    <TopSection posts={lifestylePosts} containerWidth={'375px'} />
                </div>
                <div className={styles['top-container']}>
                    <SectionHeader sectionName={'Fashion'} />
                    <TopSection posts={fashionPosts} containerWidth={'375px'} />
                </div>
            </div>


            <div className={styles['bottom-section-container']}>
                <div className={styles['bottom-section-container']}>
                    <SectionHeader sectionName={'Тravel'} />
                    <BottomSection posts={travelPosts} containerWidth={'700px'}/>
                </div>
            </div>
        </div>
    );
}

export default withRouter(BlogPostsPage);