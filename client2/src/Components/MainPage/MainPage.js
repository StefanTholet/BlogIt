import {useState, useEffect} from 'react';
import { getPosts } from '../services/blogService';
import HeroImage from '../HeroImage/HeroImage';
import SlideshowPosts from '../Blog/SlideshowPosts/SlideshowPosts';
import BlogPostsSection from '../Blog/BlogPostsSection';

import './MainPage.scss';

const MainPage = () => {
   
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
            .then(result => result.json())
            .then(allPosts => {
                setPosts(allPosts)
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="main-page-container">
            <HeroImage imageSrc={"main.jpg"} />
            <div className="featured-posts">
            <h2>Featured Posts</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <SlideshowPosts posts={posts} />
            <BlogPostsSection posts={posts}/> 
        </div>
    )
}

export default MainPage

