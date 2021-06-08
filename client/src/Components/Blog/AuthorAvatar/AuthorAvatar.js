import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    'post-typography': {
        color: 'black'
    },
    'avatar-container': {
        alignSelf: 'start'
    },
}))

const AuthorAvatar = ({ createdOn, author, image }) => {
    const classes = useStyles();

    return (
        <Grid container item className={classes['avatar-container']} xs={12} md={12} >
            <Grid className='avatar'>
                <Avatar src={image} />
            </Grid>
            <Grid className='post-details'>
                <Grid className='author-name' container direction="column" >
                    <Typography variant='caption' className={classes['post-typography']} color="primary">
                        {author}
                    </Typography>
                    <Typography variant='caption' className={classes['post-typography']} color="primary">
                        {createdOn}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default AuthorAvatar;