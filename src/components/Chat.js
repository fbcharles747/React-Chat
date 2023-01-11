import { AiOutlineVideoCamera, AiOutlineAudio } from "react-icons/ai";
import Input from "./Input";
import Message from "./Message";
export default function Chat() {
  return (
    <div className="chatwindow">
      <div className="navbar">
        <span>other user name</span>
        <div className="chat-icons">
          <AiOutlineVideoCamera size={24} />
          <AiOutlineAudio size={24} />
        </div>
      </div>
      <div className="dialog">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <Input />
    </div>
  );
}
