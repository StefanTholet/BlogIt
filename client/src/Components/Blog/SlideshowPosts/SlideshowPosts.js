import style from './SlideshowPosts.module.css';
import Slide from './Slide';
import { useState, useEffect } from 'react';
const SlideshowPosts = ({ posts }) => {
    console.log(posts)
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === posts.length - 1 ? 0 : prevIndex + 365
                ),
            2500
        );
        return () => { };
    }, [index]);

    return (
        <div className={style.slideshow}>
            <div className={style["slideshow-slider"]}
                style={{ transform: `translate3d(${- index + 0}px, 0, 0)` }}>
                {
                    posts.length > 0 ? 
                    posts.map(post => <Slide key={`${post.author}-${post.title}`} className={style.slide} post={post.imageUrl} />)
                    : null
                }
                
                
            </div>
        </div>
    )
}

export default SlideshowPosts