import style from './CommentBottomMenu.module.css'
import ReplyAllRoundedIcon from '@material-ui/icons/ReplyAllRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const CommentBottomMenu = ({
    comment, onCommentReply,
    replyOrReplies, onExpandRepliesClick,
    repliesIcon, isCommentCreator
}) => {

    return (
        <div className={style["bottom-menu"]}>
            {
                comment?.replies?.length > 0 ?
                    <div className={style["replies-button"]} onClick={onExpandRepliesClick}>
                        <span className={style["show-replies"]}>
                            {comment.replies.length + ' ' + replyOrReplies}
                            {repliesIcon === 'expand' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </span>
                    </div>
                    : null
            }
            <div className={style["reply-container"]}>
                <span className={style["reply"]} onClick={onCommentReply}>
                    {isCommentCreator === false ?
                    <>
                    <ReplyAllRoundedIcon />
                    <p>Reply</p>
                    </>
                        : null
                    }
                </span>
            </div>
        </div>
    );
}

export default CommentBottomMenu;