import Grid from '@material-ui/core/Grid';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../Contexts/UserContext';
import TokenContext from '../Contexts/TokenContext'
import GeneralInfo from './GeneralInfo';
import BookingInfo from './BookingInfo';
import BlogsInfo from './BlogsInfo';
import './Profile.css';
import { uploadEditedGeneralInfo, } from '../services/user';
import { uploadEditedBooking } from '../services/bookService';
import { deleteBlogPost, deleteFavoritePost } from '../services/blogService';
import { withRouter } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import useAlert from '../../hooks/useAlert';
import hideAlertAndRedirect from '../services/all'
import Alert from '@material-ui/lab/Alert';
const Profile = ({ history }) => {

    const [user, setUser] = useContext(UserContext)
    
    useEffect(() => {
        if (!user) {
            history.push('/login')
        }
    })
    
    const [token] = useContext(TokenContext)

    const { showAlert, setShowAlert, alertMessage } = useAlert();

    useEffect(() => {
        if (showAlert === 'success') {
            return hideAlertAndRedirect(setShowAlert, showAlert,)
        }
        hideAlertAndRedirect(setShowAlert);
    }, [showAlert])

    useEffect(() => {
        if (!user && !token) {
            history.push('/login')
        }
    })

    const [isEditingGeneralInfo, setisEditingGeneralInfo] = useState(false);
    const [isEditingBookingInfo, setisEditingBookingInfo] = useState(false);

    const isEditingGeneralInfoHandler = () => {
        setisEditingGeneralInfo(currentState => !currentState);
    }

    const onGeneralInfoFormSubmitHandler = (e) => {
        e.preventDefault();
        uploadEditedGeneralInfo(e, user._id)
            .then(updatedUser => {
                setUser(updatedUser)
                setisEditingGeneralInfo(false)
                setShowAlert('success', 'General information edited!')
            })
            .catch(err => console.log(err))
    }

    const isEditingBookingInfoHandler = () => {
        setisEditingBookingInfo(currentState => !currentState);
    }

    const onBookingInfoFormSubmitHandler = (newBookingDetails) => {
        uploadEditedBooking(newBookingDetails, user._id, user.bookings[0]._id)
            .then(updatedUser => {
                setUser(updatedUser)
                setisEditingBookingInfo(false)
                setShowAlert('success', 'Your booking has been edited!')
            })
            .catch(err => console.log(err))
    }

    const blogBoxClickHandler = (id) => {
        history.push(`/blog/read-more/${id}`)
    }

    const ownBlogDeleteHandler = (blogId) => {
        deleteBlogPost(blogId, user._id)
            .then(updatedUser => {
                setUser(updatedUser)
                setShowAlert('success', 'You have deleted your post!')
            })
    }

    const deleteFavoriteHandler = (blogId) => {
        deleteFavoritePost(blogId, user._id)
            .then(updatedUser => {
                setUser(updatedUser)
                setShowAlert('success', 'Favorite post removed!')
            })
            .catch(err => console.log(err))
    }

    return (
        <Grid container className="profile-container" style={{}}>
            { showAlert ?
                <Alert variant="outlined" severity={showAlert}>
                    {alertMessage}
                </Alert>
                :
                null
            }
            <GeneralInfo
                user={{ ...user }}
                isEditing={isEditingGeneralInfo}
                editClickHandler={isEditingGeneralInfoHandler}
                submitClickHandler={onGeneralInfoFormSubmitHandler}
            />
            <Divider />
            <BookingInfo
                user={{ ...user }}
                isEditing={isEditingBookingInfo}
                editClickHandler={isEditingBookingInfoHandler}
                submitClickHandler={onBookingInfoFormSubmitHandler}
            />
            <Divider />
            <BlogsInfo
                blogBoxClickHandler={blogBoxClickHandler}
                user={{ ...user }}
                deleteFavoriteHandler={deleteFavoriteHandler}
                ownBlogDeleteHandler={ownBlogDeleteHandler} />
            <Divider className="divider" />
        </Grid>
    );
}

export default withRouter(Profile);