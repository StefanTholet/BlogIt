
import { Button } from '@material-ui/core';
import style from './NewComment.module.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import ReplyAllRoundedIcon from '@material-ui/icons/ReplyAllRounded';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import CommentEditor from './CommentEditor';
// const useStyles = makeStyles(() => ({
//     'new-comment': {
//         color: 'black',
//         width: '30%',
//         minWidth: '28rem',
//         minHeight: '10rem',
//         margin: '0 auto',
//         marginBottom: '3rem',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center'
//     },
//     'comment-form': {
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     }
// }))

const NewComment = ({ submitComment, avatar, postId, postTitle }) => {
    const [previewClass, setPreviewClass] = useState('hide-preview')

    // const classes = useStyles();

    return (
        // <Paper className={classes['new-comment']}>
        //             <Avatar alt="Remy Sharp" src={avatar} style={{marginTop: '1rem'}} />
        //         <Grid justifyContent="left" item xs zeroMinWidth style={{width:'100%'}}>
        //             <form className={classes['comment-form']} onSubmit={(e) => submitComment(e)}>
        //                 <TextField
        //                     className={classes['text-container']}
        //                     name='comment'
        //                     className={classes['textarea-sizing']}
        //                     id="standard-textarea"
        //                     multiline
        //                     style={{width:'80%'}}
        //                 />
        //                 <Button type="submit" style={{ marginBlock: '1rem' }}
        //                     variant="contained"
        //                 >
        //                     Submit</Button>
        //             </form>
        //         </Grid>     
        // </Paper>
        <div className={`${style["reply-container"]} ${style[previewClass]}`}>
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
                            <CommentEditor />
                        </div>
                    </div>
                </div>
                <div className={style["submit-panel"]}>
                    <div className={style["save-or-cancel"]}>
                        <Button variant="contained" className={style["reply-button"]}><ReplyAllRoundedIcon /> Reply</Button>
                        <Button className={style["cancel-button"]}>cancel</Button>
                    </div>
                    <div>
                    <Button className={style["preview-button"]}>show preview <DoubleArrowRoundedIcon fontSize="small"/></Button>

                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default NewComment;