import { FcAddImage } from "react-icons/fc";
export default function RegisteredPage() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat app</span>
        <span className="form-title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="fileImg" className="file" />
          <label htmlFor="fileImg">
            <FcAddImage size={40} />
            <span> Add an avatar</span>
          </label>
          <button>sign up</button>
        </form>
        <p>You already have an account? Login </p>
      </div>
    </div>
  );
}
