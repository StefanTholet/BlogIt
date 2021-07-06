import style from './TopSection.module.css';
import { useState, useEffect } from 'react';
import LargePostPreview from '../PostPreviews/LargePostPreview';
import SmallPostPreview from '../PostPreviews/SmallPostPreview';

const TopSection = ({ posts }) => {
    const [leftPost, setLeftPost] = useState({});
    const [rightPosts, setRightPosts] = useState([]);
    const [containerWidth, setContainerWidth] = useState('')

    useEffect(() => {
        const allPosts = posts.slice();
        setLeftPost(allPosts.shift());
        setRightPosts(allPosts.splice(0, 3))
        setContainerWidth(currentWidth => {
           return window.innerWidth >= 599 ? '370px' : setContainerWidth(currentWidth => '100%')
        })
    }, [posts])

    return (
        <div className={style["section-posts-container"]}>
            <LargePostPreview post={leftPost} containerWidth={containerWidth} />
            <div className={style["right-post"]}>
                {
                    rightPosts.map(x => <SmallPostPreview post={x} />)
                }
            </div>
        </div>
    )
}

export default TopSection