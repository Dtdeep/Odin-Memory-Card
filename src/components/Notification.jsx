import "../css/Notification.css";

const Notification = ({ message }) => {
  return (
    <div className="messageContainer">
      <h3>{message}</h3>
    </div>
  );
};

export default Notification;
