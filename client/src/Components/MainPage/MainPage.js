import style from './MainPage.module.css';
import {useState, useEffect} from 'react';
import { getPosts } from '../services/blogService';
import HeroImage from '../HeroImage/HeroImage';
import HeadingWithDescription from '../Typography/HeadingWithDescription';
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
            <HeadingWithDescription heading={'Featured Posts'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'} />
            <SlideshowPosts posts={posts} />
            <BlogPostsPage /> 
        </div>
    )
}

export default MainPage

