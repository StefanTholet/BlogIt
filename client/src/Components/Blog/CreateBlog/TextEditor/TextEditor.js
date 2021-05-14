import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './custom.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const TextEditor = ({ 
    onSubmit, 
    onTextEditorChange, 
    onPreview,
    onImageUrlInputChangeHandler
 }) => {

    return (
        <form onSubmit={onSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}>
            <CKEditor
                onChange={onTextEditorChange}
                editor={ClassicEditor}
                config={
                    {
                        ckfinder: {
                            uploadUrl: 'http://localhost:5000/blog/uploads'
                        },
                        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
                        heading: {
                            options: [
                                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                            ]
                        }
                    }
                }
            />
            <TextField id="outlined-basic"
                onChange={(e) => onImageUrlInputChangeHandler(e)}
                label="Image URL"
                variant="outlined"
                name="imageUrl"
                id="imageUrl"
                style={{ maxWidth: '30rem', margin: '0 auto', marginTop: '0.5rem' }} />
            <div className='submit-btn-container'>
                <Button
                    className=".post-btn"
                    variant="outlined"
                    onClick={(e) => onPreview(e)}
                >Preview Post</Button>
                <Button type="submit"
                    className=".post-btn"
                    variant="outlined">Submit</Button>
            </div>
            <style jsx>{`
                    .submit-btn-container {
                        min-width: 15rem; 
                        margin: 0 auto;
                        margin-top: 0.5rem;
                        display: flex;
                        justify-content: space-around;
                    }
                    .post-btn {
                        margin: 0 auto; 
                        margin-top: 0.5rem;
                    }
                `}</style>
        </form>
    )
}

export default TextEditor;