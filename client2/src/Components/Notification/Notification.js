import './Notification.css'
const Notification = (props) => {

    return (
        <div className={`message-box ${props.class}`}>
        <div className="msgbox-content">{props.message}</div>
        </div>            
    )
}

export default Notification;