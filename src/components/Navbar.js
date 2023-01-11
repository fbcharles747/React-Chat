export default function Navbar() {
  return (
    <div className="navbar">
      <span className="title">Chat app</span>
      <div className="user-panel">
        <img
          src="https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?pid=ImgDet&rs=1"
          alt=""
        />
        <span className="username">User name</span>
        <button>Logout</button>
      </div>
    </div>
  );
}
