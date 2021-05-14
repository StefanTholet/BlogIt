import { Avatar, Grid, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    'new-comment': {
        color: 'black',
        width: '30%',
        minWidth: '28rem',
        minHeight: '5rem',
        margin: '0 auto',
        marginBottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    'comment-form': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    'comment-date': {
        textAlign: "left",
        color: "gray",
        marginTop: '15%'
    },
    author: {
        // marginTop: '5px',
        textAlign: "left",
        fontSize: '0.8rem',
        fontWeight: '500',
        lineHeight: '0.8rem'
    },
    content: {
        textAlign: "left",
        
    }
}))

const OldComment = ({ comment }) => {

    const classes = useStyles();

    return (
        <Paper style={{ marginBottom: '2rem' }} className={classes['new-comment']}>
            <Grid container wrap="nowrap" style={{ height: '100%' }} spacing={2}>
                <Grid item>
                    <Avatar alt="Remy Sharp" src={comment.avatar} />
                </Grid>
                <Grid justifyContent="left" style={{ height: '100%' }} item xs zeroMinWidth>
                    <h4 className={classes.author} >{comment.author}</h4>
                    <p className={classes.content} style={{}}>
                        {comment.content}
                    </p>
                    <p className={classes['comment-date']}>
                        Posted on: {comment.postedOnDate}
                    </p>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default OldComment;