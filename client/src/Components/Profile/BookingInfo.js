import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react'

const BookingInfo = ({ user, isEditing, editClickHandler, submitClickHandler }) => {

    const bookingDetails = user?.bookings?.[0];
    const [dates, setDates] = useState(bookingDetails?.dates);

    useEffect(() => {
        setDates(bookingDetails?.dates);
    }, [user])

    const onDateChangeInput = (e) => {
        const value = e.target.value;
        setDates({ ...dates, [e.target.name]: value })
    }

    const saveNewBookingDetails = (e) => {
        e.preventDefault();
        const newDetails = {
            dates: {
                'checkIn': e.target.checkIn.value,
                'checkOut': e.target.checkOut.value,
            },
            guests: {
                adults: e.target.adults.value,
                children: e.target.children.value,
            },
            rooms: {
                single: e.target.single.value,
                double: e.target.double.value,
                triple: e.target.triple.value,
            }
        }
        submitClickHandler(newDetails);
    }


    return (
        <Grid className="general-info">
            <form onSubmit={saveNewBookingDetails}>
                <div className="flex-container">
                    <h2>Your booking information</h2>
                    <IconButton>
                        <EditIcon onClick={editClickHandler} />
                    </IconButton>
                </div>
                <div className="flex-container" style={{ marginTop: '0' }}>
                    <h2>Dates</h2>
                </div>
                <div className="info-box-container">
                    <TextField
                        onChange={onDateChangeInput}
                        className="general-info-labels"
                        label="Check-in"
                        name="checkIn"
                        value={dates?.checkIn}
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}

                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        onChange={onDateChangeInput}
                        className="general-info-labels"
                        label="Check-out"
                        name="checkOut"
                        value={dates?.checkOut}
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={!isEditing ? { readOnly: true } : null} />
                </div>
                <div className="flex-container" style={{ marginTop: '0' }}>
                    <h2>Guests</h2>
                </div>
                <div className="info-box-container">
                    <TextField
                        className="general-info-labels"
                        label="Adults"
                        name="adults"
                        defaultValue={bookingDetails?.guests.adults}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                        autoFocus={isEditing ? true : false}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Children"
                        name="children"
                        defaultValue={bookingDetails?.guests.children}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                </div>
                <div className="flex-container" style={{ marginTop: '0' }}>
                    <h2>Rooms</h2>
                </div>
                <div className="info-box-container">
                    <TextField
                        className="general-info-labels"
                        label="Single"
                        name="single"
                        defaultValue={bookingDetails?.rooms.single}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Double"
                        name="double"
                        defaultValue={bookingDetails?.rooms.double}
                        variant={isEditing ? "outlined" : "standard"}
                        InputProps={!isEditing ? { readOnly: true } : null}
                    />
                    <TextField
                        className="general-info-labels"
                        label="Triple"
                        name="triple"
                        defaultValue={bookingDetails?.rooms.triple}
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

export default BookingInfo;