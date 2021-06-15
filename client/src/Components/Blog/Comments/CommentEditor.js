import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './NewCommentEditor.css'

const CommentEditor = ({ onEditorStateChange, editorState }) => {

    return (
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="text-editor-wrapper"
            editorClassName="editor-text-field no-min-height"
            onEditorStateChange={onEditorStateChange}
            style={
                { borderBottom: "1px solid black", }
            }
            toolbar={{
                options: ['inline', 'list', 'textAlign', 'link', 'embedded', 'emoji', 'history'],
                textAlign: {
                    inDropdown: true,
                }
            }
            }
        />
    );
}

export default CommentEditor;