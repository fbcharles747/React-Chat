import { MdOutlineAttachFile } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
export default function Input() {
  return (
    <div className="input">
      <input type="text" placeHolder="Enter your message" />
      <div className="send">
        <BiImageAdd size={24} color="gray" />
        <MdOutlineAttachFile size={24} color="gray" />
        <button>Send</button>
      </div>
    </div>
  );
}
