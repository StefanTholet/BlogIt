import SmallPost from '../PostPreviews/SmallPost';
import style from './SmallPostsSection.module.css'
const SmallPostsSection = ({ posts }) => {

    return (
        <div className={style["small-posts-container"]}>
       { posts.map(post => <SmallPost post={post} key={`smallPosts${post._id}`}/>)}
        </div>
    )
}

export default SmallPostsSection;