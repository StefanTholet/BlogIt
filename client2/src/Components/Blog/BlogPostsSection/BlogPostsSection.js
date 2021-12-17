
import { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';

import SectionHeader from '../Sections/SectionHeader'
import TopSection from '../Sections/TopSection';
import BottomSection from '../Sections/BottomSection';

import './blogPostsSection.scss';

const BlogPostsPage = ({ posts }) => {

    const [user, setUser] = useContext(UserContext)
    const [lifestylePosts, setLifestylePosts] = useState([])
    const [foodPosts, setFoodPosts] = useState([])
    const [travelPosts, setTravelPosts] = useState([])
    const [fashionPosts, setFashionPosts] = useState([])

    useEffect(() => {
        setLifestylePosts(filterPosts(posts, 'Lifestyle'));
        setFoodPosts(filterPosts(posts, 'Food'));
        setFashionPosts(filterPosts(posts, 'Fashion'));
        setTravelPosts(filterPosts(posts, 'Travel'));
    }, [posts])

    const filterPosts = (allPosts, typeOfPost) => {
        const filteredArray = allPosts.filter(x => x.category === typeOfPost);
        return filteredArray
    }

    return (
        <div className="category-sections">
            <div className="top-section-container">
                <div className="top-container">
                    <SectionHeader sectionName={'Lifestyle'} />
                    <TopSection posts={lifestylePosts} containerWidth={'375px'} />
                </div>
                <div className="top-container">
                    <SectionHeader sectionName={'Fashion'} />
                    <TopSection posts={fashionPosts} containerWidth={'375px'} />
                </div>
            </div>


            <div className="bottom-section-container">
                <div className="bottom-section-container">
                    <SectionHeader sectionName={'Тravel'} />
                    <BottomSection posts={travelPosts} containerWidth={'700px'}/>
                </div>
            </div>
        </div>
    );
}

export default withRouter(BlogPostsPage);