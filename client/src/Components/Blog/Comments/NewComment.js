import { Avatar, Grid, Paper } from "@material-ui/core";
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    'new-comment': {
        color: 'black',
        width: '30%',
        minWidth: '28rem',
        minHeight: '10rem',
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
    }
}))

const NewComment = ({submitComment, avatar}) => {
    const classes = useStyles();

    return (
        <Paper className={classes['new-comment']}>
                    <Avatar alt="Remy Sharp" src={avatar} style={{marginTop: '1rem'}} />
                <Grid justifyContent="left" item xs zeroMinWidth style={{width:'100%'}}>
                    <form className={classes['comment-form']} onSubmit={(e) => submitComment(e)}>
                        <TextField
                            className={classes['text-container']}
                            name='comment'
                            className={classes['textarea-sizing']}
                            id="standard-textarea"
                            multiline
                            style={{width:'80%'}}
                        />
                        <Button type="submit" style={{ marginBlock: '1rem' }}
                            variant="contained"
                        >
                            Submit</Button>
                    </form>
                </Grid>     
        </Paper>
    );
}

export default NewComment;