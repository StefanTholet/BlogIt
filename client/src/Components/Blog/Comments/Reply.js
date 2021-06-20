import style from './CommentReplies.module.css';
import CommentMetaData from './CommentMetaData';
import CommentContent from './CommentContent';
const Reply = ({ reply }) => {
   
    return (
        <div className={style.reply}>
            <CommentMetaData comment={reply} dateColor={'rgba(255,255,255,0.8)'}/>
            <div className={style['reply-content']}>
            <CommentContent content={reply?.content} padding={'none'}/>
            </div>
        </div>
    );
}

export default Reply;