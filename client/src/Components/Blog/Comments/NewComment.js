
import { Button } from '@material-ui/core';
import style from './NewComment.module.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import ReplyAllRoundedIcon from '@material-ui/icons/ReplyAllRounded';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import CommentEditor from './CommentEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import OldComment from './OldComment';
const NewComment = ({ submitComment, postId, postTitle, onCancelButtonClick, user, oldComment }) => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const [showPreview, setShowPreview] = useState(false);

    const [comment, setComment] = useState({});

    const [previewClass, setPreviewClass] = useState('hide-preview')

    const onPreviewButtonClick = (e) => {
        compileCommentContent(e);
        setPreviewClass('show-preview')
        setShowPreview(preview => !preview);
    }

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    const sendCommentToCommentSection = (e) => {
        const newComment = compileCommentContent(e);
        submitComment(newComment);
    }
 
    const compileCommentContent = (e) => {
        e.preventDefault();
        const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        const newComment = {
            author: `${user.firstName} ${user.lastName}`,
            avatar: user.imageUrl,
            content,
            userId: user._id,
            isReplyTo: oldComment._id
        }
        setComment(newComment);
        return newComment;
    }

    return (
        <div className={`${style["reply-container"]} ${style[previewClass]}`}>
          {
        showPreview ? <OldComment comment={comment} /> : null
    }
            <div className={style["reply-area"]}>
                <div className={style["composer-fields"]}>
                    <div className={style["reply-to"]}>
                        <div className={style["reply-details"]}>
                            <div className={style["composer-action-title"]}>
                                <div className={style["reply-icon"]}>
                                    <ReplyAllRoundedIcon />
                                </div>
                                <span className={style["action-title"]}>
                                    <Link to={`/blog/read-more/${postId}`}>{postTitle}</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style["toolbar-visible"]}>
                    <div className={style["editor"]}>
                        <div className={style["editor-container"]}>
                            <CommentEditor onEditorStateChange={onEditorStateChange} editorState={editorState} />
                        </div>
                    </div>
                </div>
                <div className={style["submit-panel"]}>
                    <div className={style["save-or-cancel"]}>
                        <Button variant="contained" className={style["reply-button"]} onClick={sendCommentToCommentSection}><ReplyAllRoundedIcon /> Reply</Button>
                        <Button className={style["cancel-button"]} onClick={onCancelButtonClick}>cancel</Button>
                    </div>
                    <div>
                        <Button className={style["preview-button"]} onClick={onPreviewButtonClick}>show preview <DoubleArrowRoundedIcon fontSize="small" /></Button>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default NewComment;