import style from './MainPage.module.css';
import {useState, useEffect} from 'react';
import { getPosts } from '../services/blogService';
import HeroImage from '../HeroImage/HeroImage';
import SlideshowPosts from '../Blog/SlideshowPosts/SlideshowPosts';
import BlogPostsPage from '../Blog/BlogPostsPage/BlogPostsPage'
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
        <div className={style["main-page-container"]}>
            <HeroImage imageSrc={"main.jpg"} />
            <div className={style["featured-posts"]}>
            <h2>Featured Posts</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <SlideshowPosts posts={posts} />
            <BlogPostsPage /> 
        </div>
    )
}

export default MainPage

