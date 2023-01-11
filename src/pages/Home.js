import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import UserInfo from "../components/UserInfo";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="sidebar">
          <Navbar />
          <Search />
          <UserInfo />
        </div>

        <Chat />
      </div>
    </div>
  );
}
