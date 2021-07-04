import style from './LargePostPreview.module.css'
import { NavLink } from 'react-router-dom';
const LargePostPreview = ({ post, containerWidth, containerBorder, imageWidth, imageHeight }) => {

    const { imageUrl, title, author, createdOn, postPreviewText } = post || '';

    return (
        <div className={style["large-post"]}
            style={{
                width: containerWidth,
                borderBottom: containerBorder
            }}>
            <div className={style["post-image"]}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    width: imageWidth ? imageWidth : '100%',
                    maxWidth: '360px',
                    height: imageHeight ? imageHeight : '250px',
                    borderBottom: containerBorder ? containerBorder : 'none'
                }} />
            <div className={style["left-post-details"]}>
                <h3 className={style["title-link"]}>
                    <NavLink to="/">{title}</NavLink>
                </h3>
                <div className={style["post-date-and-author"]}>
                    <span>by <a href="/" className={style["author-link"]}>{author}</a></span>
                    <span className={style["created-on"]}>{createdOn}</span>
                </div>
                <div className={style["preview-text-container"]}>
                    <span className={style["post-preview-text"]}>{postPreviewText}</span>
                </div>
            </div>
        </div>
    );
}

export default LargePostPreview;