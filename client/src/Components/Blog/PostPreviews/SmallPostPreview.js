import style from './SmallPostPreview.module.css';
import { NavLink } from 'react-router-dom';
const SmallPostPreview = ({ post }) => {

    return (
        <div className={style["small-preview-container"]}>
                <div className={style["small-preview-image"]} style={{ backgroundImage: `url(${post?.imageUrl})` }} />
                <div className={style["small-preview-details"]}>
                    <h3 className={style["small-preview-title-link"]}>
                        <NavLink to="/">{post?.title}</NavLink>
                    </h3>
                    <div className={style["post-date-and-author"]}>
                        <span className={style["created-on"]}>{post?.createdOn}</span>
                    </div>
                </div>
            </div>
    );
}

export default SmallPostPreview;