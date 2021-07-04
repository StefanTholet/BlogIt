import style from './SlideshowPosts.module.css';
import Slide from './Slide';
import { useState, useEffect } from 'react';
const SlideshowPosts = ({ posts }) => {

    const [translate3dPx, setTranslate3dPx] = useState(0);
    const [totalTranslate3dPx, setTotalTranslate3dPx] = useState(Number.MAX_SAFE_INTEGER)

    let stopSlide = false;

    const onSlideshowEnter = () => {
        stopSlide = true;
    }

    const onSlideshowLeave = () => {
        stopSlide = false;
        slideshowTimer();
    }

    function slideshowTimer() {
        const timer = setTimeout(() => {
            if (stopSlide) {
                clearTimeout(timer)
                return
            }
            setTranslate3dPx((prevTranslate3dPx) =>
                prevTranslate3dPx === totalTranslate3dPx ? 0 : translate3dPx + 360
            )
        },
            2500
        );
    }

    useEffect(() => {
        setTotalTranslate3dPx(posts.length * 365)
        slideshowTimer(totalTranslate3dPx)
    }, [translate3dPx, posts]);

    return (
        <div className={style.slideshow} onMouseOver={onSlideshowEnter} onMouseOut={onSlideshowLeave}>
            <div className={style["slideshow-slider"]}
                style={{ transform: `translate3d(${- translate3dPx}px, 0, 0)` }}>
                {
                    posts.length > 0 ?
                        posts.map(post => <Slide key={`${post.author}-${post.title}`} className={style.slide} post={post} />)
                        : null
                }


            </div>
        </div>
    )
}

export default SlideshowPosts