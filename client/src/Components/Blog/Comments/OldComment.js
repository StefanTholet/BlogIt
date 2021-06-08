import { Avatar, Grid, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
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
        // display: 'flex',
    },
    'meta-data': {
        width: '100%',
        padding: '0 11px 4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    'author-container': {
        display: 'flex',
        paddingTop: '40px'

    },
    'comment-date': {
        textAlign: "left",
        color: "gray",
    },
    author: {
        textAlign: "center",
        fontSize: '0.8rem',
        fontWeight: '500',
        lineHeight: '0.8rem'
    },
    content: {
        textAlign: "left",
        paddingBottom: '40px'
    },
    divider: {
        width: '100%',
        marginBlock: '1rem'
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
                <div class={classes['author-container']}>
                    <Avatar className={classes.large} alt="Remy Sharp" src={comment.avatar} />
                    <div className={classes['meta-data']}>
                        <h3 className={classes.author}>{comment.author}</h3>
                        <p className={classes['comment-date']}>
                            Posted on: {comment.postedOnDate}
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ height: '100%' }}>


                <p className={classes.content} style={{}}>
                    {comment.content}
                </p>

            </div>
            <Divider className={classes.divider} />
        </Grid>
    );
}

export default OldComment;