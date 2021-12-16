import styles from './blogPostsPage.module.css';
import { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import SectionHeader from '../Sections/SectionHeader'
import TopSection from '../Sections/TopSection';
import BottomSection from '../Sections/BottomSection';
import SmallPostsSection from '../Sections/SmallPostsSection';
import HeadingWithDescription from '../../Typography/HeadingWithDescription';

import ToplogPostsPreview from '../BlogPostsPreviews/ToplogPostsPreview'

const BlogPostsSection = ({ postsList = [] }) => {

    const [lifestylePosts, setLifestylePosts] = useState([])
    const [foodPosts, setFoodPosts] = useState([])
    const [travelPosts, setTravelPosts] = useState([])
    const [fashionPosts, setFashionPosts] = useState([])
    console.log(lifestylePosts);
    useEffect(() => {
        setLifestylePosts(filterPosts('Lifestyle'));
        setFoodPosts(filterPosts('Food'));
        setFashionPosts(filterPosts('Fashion'));
        setTravelPosts(filterPosts('Travel'));
    }, [postsList])

    const filterPosts = (typeOfPost) => {
        const filteredArray = postsList?.filter(x => x.category === typeOfPost);
        return filteredArray
    }

    return (
        <div className={styles["category-sections"]}>
            {
                [{ lifestylePosts }, { fashionPosts }].map(posts => <ToplogPostsPreview posts={posts} />)
            }
            {/* <div className={styles['top-section-container']}>
                <div className={styles['top-container']}>
                    <SectionHeader sectionName={'Lifestyle'} />
                    <TopSection posts={lifestylePosts} />
                </div>
                <div className={styles['top-container']}>
                    <SectionHeader sectionName={'Fashion'} />
                    <TopSection posts={fashionPosts} />
                </div>
            </div>

            <div className={styles['bottom-section-container']}>
                <div className={styles['bottom-section-container']}>
                    <SectionHeader sectionName={'Тravel'} />
                    <BottomSection posts={travelPosts}/>
                </div>
            </div>
            <HeadingWithDescription heading={'Our Recipes'} description={'Check our new Food section for our hand-picked recipes!'}/>
            <div className={styles['small-posts-section']}>
                <SmallPostsSection posts={foodPosts}/>
            </div> */}
        </div>
    );
}

export default withRouter(BlogPostsSection);