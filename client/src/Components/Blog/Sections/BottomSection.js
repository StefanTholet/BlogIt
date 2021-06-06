import { useState, useEffect } from 'react';
import LargePostPreview from '../PostPreviews/LargePostPreview';
import style from './BottomSection.module.css';
const BottomSection = ({ posts, containerWidth }) => {

    const [largePostPreviews, setLargePostPreviews] = useState([]);
    useEffect(() => {
        const mainPosts = posts.slice(0, 2)
        setLargePostPreviews(mainPosts);
    }, [posts])

    return (
        <div className={style["bottom-section-posts"]}>
            {
                largePostPreviews
                    ?
                    largePostPreviews.map(post => <LargePostPreview post={post} key={post.author + post.title} containerWidth={containerWidth} containerBorder={'1px solid #DEDEDE'} />)
                    : null
            }
        </div>
    );
}

export default BottomSection;