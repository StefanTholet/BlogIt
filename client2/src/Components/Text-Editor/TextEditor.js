import { today } from '../services/bookService';
import './TextEditor.css';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { useState, useContext } from 'react';
import UserContext from '../Contexts/UserContext';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
const TextEditor = ({ sendBlogPost, scrollToPreviewDiv }) => {

    const user = useContext(UserContext)[0];
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [selectValue, setSelectValue] = useState('Lifestyle')
    const [submitBtnType, setSubmitBtnType] = useState('Submit Post')
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    const handleSelectValueChange = (e) => {
        setSelectValue(e.target.value)
    }

    const blogPostCompiler = (e) => {
        e.preventDefault()
        console.log(user)
        const form = e.target;
        const blogPost = {
            title: form?.title?.value,
            imageUrl: form?.imageUrl?.value,
            category: form?.category?.value,
            content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
            postPreviewText: convertToRaw(editorState.getCurrentContent()).blocks[0].text.substring(0, 105) + '...',
            author: `${user?.firstName} ${user?.lastName}`,
            authorImageUrl: user.imageUrl,
            createdOn: today,
            userId: user._id
        }
        return blogPost;
    }

    const onFormButtonClick = (e) => {
        setSubmitBtnType(e.target.textContent)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const blogPost = blogPostCompiler(e);
        sendBlogPost(submitBtnType, blogPost);
        if (submitBtnType === 'Preview Post') { scrollToPreviewDiv() }
    }

    return (
        <form className="text-editor-form" onSubmit={onFormSubmit}>
            <div className="blog-options-menu">
                <div className="blog-title-container">
                    <label htmlFor="title" className="title-label">
                        Blog Title
                    </label>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="title"
                        autoComplete="title"
                        autoFocus
                    />
                </div>
                <div className="blog-imageUrl-container">
                    <label htmlFor="imageUrl" className="imageUrl-label">
                        Image URL
                    </label>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="imageUrl"
                        autoComplete="imageUrl"
                    />
                </div>
                <div className="blog-category-container">
                    <label htmlFor="category" className="category-label">
                        Blog Category
                    </label>
                    <Select
                        name="category"
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        label="Category"
                        value={selectValue}
                        onChange={handleSelectValueChange}
                    >
                        <MenuItem value={"Lifestyle"}>Lifestyle</MenuItem>
                        <MenuItem value={"Travel"}>Travel</MenuItem>
                        <MenuItem value={"Fashion"}>Fashion</MenuItem>
                        <MenuItem value={"Food"}>Food</MenuItem>
                    </Select>
                </div>
            </div>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="text-editor-wrapper"
                editorClassName="editor-text-field"
                onEditorStateChange={onEditorStateChange}
                style={
                    { borderBottom: "1px solid black", }
                }
            />
            <div className="form-buttons">
                <Button type="submit" name="preview-submit" variant="contained"
                    color="primary" onClick={onFormButtonClick}>Preview Post</Button>
                <Button className="submit-post-button" type="submit"
                    name="submit" variant="contained" color="secondary"
                    onClick={onFormButtonClick}>Submit Post </Button>
            </div>
        </form>
    )
}

export default TextEditor;