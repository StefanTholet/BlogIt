import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  useControlledForm  from '../../hooks/useControlledForm';

const GeneralInfo = ({ user, isEditing, editClickHandler, submitClickHandler }) => {

    const {data, setData} = useControlledForm(user)
    const onFormChangeHandler = (e) => {
        setData(e)
    }
    const { imageUrl, firstName, lastName, email } = data;
    
    return (
        <Grid className="general-info">
            <form onSubmit={submitClickHandler} >
                <div className="flex-container">
                    <h2>General Information</h2>
                    <IconButton className="icon-button">
                        <EditIcon onClick={editClickHandler} />
                    </IconButton>
                </div>
                {isEditing ?
                    <TextField
                        onChange={onFormChangeHandler}
                        className="general-info-labels"
                        label="Avatar Image URL"
                        name="imageUrl"
                        value={imageUrl}
                        variant="outlined"
                        autoFocus
                        style={{ marginBottom: '1rem' }}
                    />
                    : <Avatar style={{ marginBottom: '1rem' }} src={imageUrl} />
                }
                <div className="info-box-container">
                    <TextField
                        onChange={onFormChangeHandler}
                        className="general-info-labels"
                        label="First Name"
                        name="firstName"
                        defaultValue=' '
                        value={firstName}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        onChange={onFormChangeHandler}
                        className="general-info-labels"
                        label="Last Name"
                        name="lastName"
                        defaultValue=' '
                        value={lastName}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <TextField
                        onChange={onFormChangeHandler}
                        className="general-info-labels"
                        label="Email Address"
                        name="email"
                        defaultValue=' '
                        value={email}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                </div>
                {isEditing
                    ? <Button type="submit" variant="outlined" style={{ marginTop: '1rem' }}>Apply Changes</Button>
                    : null}
            </form>
        </Grid>
    );
}

export default GeneralInfo;