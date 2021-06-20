import ContentMetaData from './CommentMetaData';
import { Avatar } from '@material-ui/core';
import style from './CommentAuthorContainer.module.css'
const CommentAuthorContainer = ({comment}) => {
 
    return (
        <div className={style['author-container']}>
            <div className={style['avatar-container']}>
                <Avatar className={style.large} alt="Remy Sharp" src={comment.avatar} />
            </div>
            <ContentMetaData comment={comment} />
        </div>
    );
}

export default CommentAuthorContainer;