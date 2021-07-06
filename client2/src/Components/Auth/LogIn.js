import React, { useEffect } from 'react';
import useAlert from '../../hooks/useAlert';
import hideAlertAndRedirect from '../services/all';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Logn = ({ onLoginSubmitForm, history, userId }) => {


    const { showAlert, setShowAlert, alertMessage } = useAlert();

    const onLoginSubmitFormWithAlert = (e) => {
        onLoginSubmitForm(e)
            .then(msg => {
                if (msg) {
                    setShowAlert('success', msg);
                } else {
                    setShowAlert('error', 'Incorrect username or password');
                }
            })
    }

    useEffect(() => {
        if (showAlert === 'success') {
            console.log('login useffect')
            return hideAlertAndRedirect(setShowAlert, showAlert, history, `users/${userId}/profile`)
        }
        hideAlertAndRedirect(setShowAlert);
    }, [showAlert])

    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} noValidate onSubmit={(e) => onLoginSubmitFormWithAlert(e)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            { showAlert ?
                <Alert variant="outlined" severity={showAlert}>
                    {alertMessage}
                </Alert>
                :
                null
            }
        </Container>
    );
}

export default withRouter(Logn);