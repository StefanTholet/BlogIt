import { NavLink } from 'react-router-dom';
import style from './SmallPost.module.css';
const SmallPost = ({post}) => {

    return (
        <div>
            <div className={style["small-post-image"]} style={{ backgroundImage: `url(${post?.imageUrl})`, display: 'block' }} />
            <div className={style["small-post-details"]}>
                <h3 className={style["small-post-title-link"]}>
                    <NavLink to="/">{post?.title}</NavLink>
                </h3>
                <div className={style["post-date-and-author"]}>
                    <span className={style["created-on"]}>{post?.createdOn}</span>
                </div>
            </div>
        </div>
    );
}

export default SmallPost;