import style from './SlideshowPosts.module.css';
import { NavLink } from 'react-router-dom';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { useState } from 'react';
const Slide = ({ post, onSlidingPostHover }) => {

    const [backgroundColor, setbackgroundColor] = useState('#111')

    const onMouseOverDiv = () => {
        setbackgroundColor('#ef5350'); 
    }

    const onMouseOutDiv = () => {
    
        setbackgroundColor('#111');
      
    }

    const { imageUrl, title, category, createdOn, comments, _id } = post;


    return (
        // <NavLink to={`/blog/read-more/${_id}`}>
        <div className={style.slide}
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
            }}
            onMouseOver={onMouseOverDiv}
            onMouseOut={onMouseOutDiv}
        >
            <div className={style["post-info"]}>
                <div className={style["category-div"]}>
                    <div className={style["category-link"]} style={{backgroundColor}}>{category}</div>
                </div>
                <h3 className={style["post-title"]}>{title}</h3>
                <div className={style["post-meta"]}>
                    <span className={style.icons}><AccessTimeOutlinedIcon className={style.icon} /></span>
                    <span className={style.date}>{createdOn}</span>
                    <div className={style["comments-info"]}>
                        <span className={style.icons}><ModeCommentOutlinedIcon className={style.icon} /></span>
                        <p>{comments.length}</p>
                    </div>
                </div>
            </div>
        </div>
        // </NavLink>
    )
}

export default Slide;