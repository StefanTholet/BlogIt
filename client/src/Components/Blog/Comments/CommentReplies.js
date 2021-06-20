
import Reply from './Reply';
import style from './CommentReplies.module.css'

const CommentReplies = ({ replies, repliesIcon }) => {

    return (

        <div className={style['replies-body']}>
            {
                repliesIcon === 'expand' ?
                    replies?.map(reply => <Reply reply={reply} />)
                    : null
            }
        </div>

    );
}

export default CommentReplies