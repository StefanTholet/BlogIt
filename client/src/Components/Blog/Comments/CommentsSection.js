import { Grid } from "@material-ui/core";
import OldComment from './OldComment';
import NewComment from './NewComment'
import Button from '@material-ui/core/Button';
import { useEffect, useState } from "react";
import { updatePostWithComment } from '../../services/blogService';
import { today } from '../../services/bookService';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  'comment-section-container': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  'comment-toggle': {
    marginBottom: '2.5rem',
    padding: '10px 20px',
    margin: '0 auto'
  }
})

const CommentsSection = ({ post, match, user }) => {

  const [wantsToComment, setCommentDecision] = useState(false);
  const [comments, setComments] = useState(null);
  const [isReplyingToComment, setIsReplyingToComment] = useState(false);
  console.log(comments)
  useEffect(() => {
    setComments(post.comments)
  }, [post])

  const classes = useStyles();

  const showOrHideCommentBox = (oldComment) => {
    if (oldComment && !oldComment.target) {
      setIsReplyingToComment(oldComment)
    }
    if (wantsToComment) {
      setCommentDecision(false);
      setIsReplyingToComment(null);
      return;
    }
    setCommentDecision(true);
  }

  const avatar = user?.imageUrl;

  const submitComment = ( comment ) => {
    const { postId } = match.params;
    
      updatePostWithComment(postId, comment)
        .then(res => {
          setComments(currentComments => {
            currentComments.push(comment);
            return currentComments;
          })
          setCommentDecision(!wantsToComment)
        })
        .catch(err => console.log(err))
  }

  return (
    <Grid className={classes['comment-section-container']} >
      <h1>Comments</h1>
      <Button className={classes['comment-toggle']}
        variant="contained"
        onClick={showOrHideCommentBox}
      >
        {user ?
          comments?.length > 0 ? 'Tell us what you think!' : 'Be the first person to comment!'
          :
          <Link to="/login">Please login to comment</Link>
        }
      </Button>
      {wantsToComment ?
        <NewComment submitComment={submitComment}
          onCancelButtonClick={showOrHideCommentBox}
          avatar={avatar}
          postTitle={post.title} user={user}
          oldComment={isReplyingToComment} />
        : null}
      {comments ? comments.map(x => <OldComment key={x._id + x.author} comment={x} showCommentBox={showOrHideCommentBox} />) : null}
    </Grid>
  );
}

export default withRouter(CommentsSection);