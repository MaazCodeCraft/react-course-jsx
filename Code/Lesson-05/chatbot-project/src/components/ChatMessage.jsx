import RobotProfileImg from "../assets/robot.png";
import UserProfileImg from "../assets/profile-1.jpg";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  console.log(UserProfileImg);

  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
        if(sender === "robot") {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImg} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImg} className="chat-message-profile" />
      )}
    </div>
  );
}
