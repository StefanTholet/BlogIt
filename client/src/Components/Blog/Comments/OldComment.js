import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import ReplyAllRoundedIcon from '@material-ui/icons/ReplyAllRounded';
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
    'comment-header': {
        width: '100%',
    },
    'meta-data': {
        width: '100%',
        padding: '0 11px 4px',
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        placeSelf: 'flex-start',
    },
    'author-container': {
        display: 'flex',
        paddingTop: '40px'

    },
    'comment-date': {
        textAlign: "left",
        fontSize: "13px",
        color: "gray",
    },
    author: {
        textAlign: "center",
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '0.8rem'
    },
    'content-metadata-flex': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    'content-container': {
        paddingLeft: '11px'
    },
    content: {
        textAlign: 'left',
        fontSize: '16px',
        paddingBottom: '40px'
    },
    'reply-container': {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 11px 40px',
        '&:hover': {
            cursor: 'pointer'
        }
    },

    'reply-button': {
        marginRight: '8px' 
    },
    divider: {
        width: '100%',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}))

const OldComment = ({ comment }) => {

    const classes = useStyles();

    return (
        <Grid container className={classes['old-comment']} wrap="nowrap" style={{ height: '100%' }} spacing={2}>
            <Divider className={classes.divider} />
            <div className={classes["comment-header"]}>
                <div className={classes['author-container']}>
                    <Avatar className={classes.large} alt="Remy Sharp" src={comment.avatar} />
                    <div className={classes['content-metadata-flex']}>
                        <div className={classes['meta-data']}>
                            <h3 className={classes.author}>{comment.author}</h3>
                            <p className={classes['comment-date']}>
                                Posted on: {comment.postedOnDate}
                            </p>
                        </div>
                        <div className={classes["content-container"]}>
                            <div dangerouslySetInnerHTML={{__html: comment.content}} className={classes.content} style={{}}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes["reply-container"]}>
                    <Link className={classes["reply-button"]} to="/">
                        <ReplyAllRoundedIcon />
                    </Link>
                    <p>Reply</p>
                </div>
            </div>
            <Divider className={classes.divider} />
        </Grid>
    );
}

export default OldComment;