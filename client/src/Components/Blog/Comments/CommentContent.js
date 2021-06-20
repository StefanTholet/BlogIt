
const CommentContent = ({ content, padding }) => {
        return (
        <div style={{
            paddingLeft: padding ? padding : '52px',
            textAlign: 'left'
        }}>
            <div dangerouslySetInnerHTML={{ __html: content }}>
            </div>
        </div>
    );
}

export default CommentContent