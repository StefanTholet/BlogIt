import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { useState } from 'react';

import Button from '@material-ui/core/Button';
const CommentEditor = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    return (
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="text-editor-wrapper"
            editorClassName="editor-text-field"
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