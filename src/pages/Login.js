export default function Login() {
  return (
    <div className="login">
      <div className="form-wrapper">
        <span className="logo">Chat app</span>
        <span className="form-title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Login</button>
        </form>
        <p>Don't have an account yet? Sign up</p>
      </div>
    </div>
  );
}
