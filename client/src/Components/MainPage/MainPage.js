import style from './MainPage.module.css'
import HeroImage from '../HeroImage/HeroImage';
import { NavLink } from 'react-router-dom';
import BlogPostsPage from '../Blog/BlogPostsPage/BlogPostsPage'
const MainPage = () => {

    return (
        <div className={style["main-page-container"]}>
            <HeroImage imageSrc={"main.jpg"} />
            <BlogPostsPage></BlogPostsPage> 
        </div >
    )
}

export default MainPage

