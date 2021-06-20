import style from './CommentMetaData.module.css'

const CommentMetaData = ({ comment, dateColor }) => {

    return (
        <div className={style['content-metadata-flex']}>
            <div className={style['meta-data']}>
                <h3 className={style.author}>{comment.author}</h3>
                <p className={style['comment-date']} style={{color: dateColor}}>
                    Posted on: {comment.createdOn}
                </p>
            </div>
        </div>
    );
}

export default CommentMetaData