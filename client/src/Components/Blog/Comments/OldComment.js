import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import CommentAuthorContainer from './CommentAuthorContainer';
import CommentBottomMenu from './CommentBottomMenu';
import { useState, useEffect } from 'react';
import CommentReplies from './CommentReplies';
import CommentContent from "./CommentContent";
const useStyles = makeStyles((theme) => ({
    'old-comment': {
        color: 'black',
        width: '60%',
        minWidth: '28rem',
        minheight: '228px',
        margin: '0 auto',
        marginBottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
    },
    'comment-container': {
        width: '100%',
    },

    content: {
        textAlign: 'left',
        fontSize: '16px',
        paddingBottom: '40px',
        overflow: 'auto',
    },
    divider: {
        width: '100%',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    'post-replies': {
        marginTop: '1em',
        borderTop: 'none',
        marginBottom: '20px',
        marginLeft: '60px',
        border: '1px solid #313131',
        color: 'rgba(255,255,255,0.8)'
    }
}))

const OldComment = ({ comment, showCommentBox, commentAuthor }) => {

    const [replyOrReplies, setReplyOrReplies] = useState('');
    const [repliesIcon, setRepliesIcon] = useState('expand');
    const [isCommentCreator, setIsCommentCreator] = useState(false)

    useEffect(() => {
        comment?.replies?.length > 1 ? setReplyOrReplies('Replies') : setReplyOrReplies('Reply');
        setIsCommentCreator((isCommentCreator) => (
            Boolean(commentAuthor === comment.author))
        )
    }, [comment])
    
    const onExpandRepliesClick = () => {
        repliesIcon === 'expand' ?
            setRepliesIcon('collapse')
            : setRepliesIcon('expand')
    }

    const onCommentReply = () => {
        showCommentBox(comment)
    }

    const classes = useStyles();

    return (
        <Grid container className={classes['old-comment']} wrap="nowrap" style={{ height: '100%' }} spacing={2}>
            <Divider className={classes.divider} />
            <div className={classes["comment-container"]}>
                <CommentAuthorContainer comment={comment} />
                <CommentContent content={comment?.content} />
                <CommentBottomMenu comment={comment} onCommentReply={onCommentReply}
                    replyOrReplies={replyOrReplies} onExpandRepliesClick={onExpandRepliesClick}
                    repliesIcon={repliesIcon} isCommentCreator={isCommentCreator}
                />
                <CommentReplies replies={comment?.replies} repliesIcon={repliesIcon}/>
            </div>
            <Divider className={classes.divider} />
        </Grid>
    );
}

export default OldComment;