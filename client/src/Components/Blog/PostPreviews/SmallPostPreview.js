import style from './SmallPostPreview.module.css';
import SmallPost from './SmallPost';
const SmallPostPreview = ({ post }) => {

    return (
        <div className={style["small-preview-container"]}>
               <SmallPost post={post} />
            </div>
    );
}

export default SmallPostPreview;