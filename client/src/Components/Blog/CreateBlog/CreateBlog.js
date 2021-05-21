import TextEditor from '../../Text-Editor/TextEditor'
import { useState, useEffect, useRef, useContext } from 'react';
import UserContext from '../../Contexts/UserContext';
import { withRouter } from 'react-router-dom';
import BlogPost from '../ReadBlogPost/BlogPost';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import useAlert from '../../../hooks/useAlert';
import hideAlertAndRedirect from '../../services/all'
import { addBlogPost } from '../../services/blogService'

const CreateBlog = ({ history }) => {

    const [user, setUser] = useContext(UserContext)
    const { showAlert, setShowAlert, alertMessage } = useAlert();

    useEffect(() => {
        if (showAlert === 'success') {
            return hideAlertAndRedirect(setShowAlert, showAlert, history, '/blog')
        }
        hideAlertAndRedirect(setShowAlert);
    }, [showAlert])

    const [preview, setPreview] = useState(false);
    const [post, setPost] = useState({})

    const postPreview = useRef();

    useEffect(() => {
        if (preview && post) {
            scrollToPreviewDiv()
        }
    }, [preview])

    const scrollToPreviewDiv = () => {
        postPreview.current.scrollIntoView({ behavior: 'smooth' })
    }

    const submitPost = (blogPost) => {
        addBlogPost(blogPost)
            .then(updatedUser => {
                setUser(updatedUser)
                setShowAlert('success', 'Blog post created!')
            })
    }

    const sendBlogPost = (previewOrSubmit, blogPost) => {
        console.log(blogPost)
        previewOrSubmit === 'Preview Post' ? setPreview(true) : submitPost(blogPost);
        setPost(blogPost)
    }

    return (
        <Grid>
            { showAlert ?
                <Alert variant="outlined" severity={showAlert} style={{ width: '20%', margin: '0 auto', marginTop: '2rem' }}>
                    {alertMessage}
                </Alert>
                :
                null
            }
            <TextEditor sendBlogPost={sendBlogPost} scrollToPreviewDiv={scrollToPreviewDiv} />
            <Grid >
                {preview ?
                    <BlogPost post={post} dangerouslySetInnerHTML={{ __html: post }} />
                    : null
                }
                <div ref={postPreview} />
            </Grid>
        </Grid>
    );
}

export default withRouter(CreateBlog);