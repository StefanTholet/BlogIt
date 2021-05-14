// import HeroImage from '../../HeroImage/HeroImage';
// import TextEditor from './TextEditor/TextEditor';
import TextEditor from '../../Text-Editor/TextEditor'
import { useState, useEffect, useRef, useContext } from 'react';
import UserContext from '../../Contexts/UserContext';
// import TokenContext from '../../Contexts/TokenContext'
import { addBlogPost, decodeBlogPost } from '../../services/blogService';
import { today } from '../../services/bookService';
import { withRouter } from 'react-router-dom';
import BlogPost from '../ReadBlogPost/BlogPost';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import useAlert from '../../../hooks/useAlert';
import hideAlertAndRedirect from '../../services/all'

const CreateBlog = ({ history }) => {

    const [user, setUser] = useContext(UserContext);
    
    useEffect(() => {
        if (!user) {
            history.push('/login')
            return;
        }
    });

    const author = `${user?.firstName} ${user?.lastName}`;
    const { showAlert, setShowAlert, alertMessage } = useAlert();

    useEffect(() => {
        if (showAlert === 'success') {
            return hideAlertAndRedirect(setShowAlert, showAlert, history, '/blog')
        }
        hideAlertAndRedirect(setShowAlert);
    }, [showAlert])


    const [body, setBody] = useState('')
    const [preview, setPreview] = useState(false);
    const [post, setPost] = useState({})

    const [imageUrl, setImageUrl] = useState('');
    
    const onImageUrlInputChangeHandler = (e) => {
        setImageUrl(e.target.value)
    }

    const postPreview = useRef();

    useEffect(() => {
        if (preview && body) {
            setPost(decodeBlogPost(
                compileBlogPost()))
            postPreview.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [preview])

    const compileBlogPost = () => {
        return {
            content: body,
            imageUrl,
            author,
            createdOn: today,
            userId: user._id
        }
    }

    const submitPost = (e) => {
        e.preventDefault();
        const body = compileBlogPost();
        addBlogPost(body)
            .then(updatedUser => {
                setUser(updatedUser)
                setShowAlert('success', 'Blog post created!')
            })
    }
    const onTextEditorChangeHandler = (e, editor) => {
        const data = editor.getData();
        setBody(data)
    }

    const onPreviewPostBtnClick = () => {
        return setPreview((currentPreview) => (!currentPreview));
    }

    return (
        <Grid>
            {/* <HeroImage image={'createBlog.jpg'} /> */}
            { showAlert ?
                <Alert variant="outlined" severity={showAlert} style={{ width: '20%', margin: '0 auto', marginTop: '2rem' }}>
                    {alertMessage}
                </Alert>
                :
                null
            }
            {/* <TextEditor onTextEditorChange={onTextEditorChangeHandler}
                onSubmit={submitPost} onPreview={onPreviewPostBtnClick}
                onImageUrlInputChangeHandler={onImageUrlInputChangeHandler}
            /> */}
            <TextEditor />
            <Grid >
                {preview ?
                    <BlogPost post={{ ...post }} />
                    : null
                }
                <div ref={postPreview} />
            </Grid>
        </Grid>
    );
}

export default withRouter(CreateBlog);