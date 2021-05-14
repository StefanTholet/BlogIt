import './TextEditor.css';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
const TextEditor = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    const onBlogSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const blog = {
            title: form.title.value,
            summary: form.summary.value,
            category: form.category.value,
            body: draftToHtml(convertToRaw(editorState.getCurrentContent()))
        }
        console.log(blog)
    }

    return (
        <form className="text-editor-form" onSubmit={onBlogSubmit}>
            <div className="blog-options-menu">
                <label htmlFor="title">
                    Blog Title
                <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="title"
                        autoComplete="title"
                        autoFocus
                    />
                </label>
                <label htmlFor="description" className="blog-description-label">
                    Blog Description
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="description"
                        autoComplete="description"
                        autoFocus
                    />
                </label>
                <label htmlFor="category">
                    Blog Category
                
                <select name="category">
                    <option value="lifestyle">lifestyle</option>
                    <option value="sports">sports</option>
                    <option value="cooking">cooking</option>
                </select>
                </label>
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
            <input className="submit-post-btn" type="submit" name="submit" value="Submit Post" />
        </form>
    )
}

export default TextEditor;