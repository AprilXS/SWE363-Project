import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext)

  async function loginUser(e) {
    e.preventDefault();
    try {
      const userInfo = await axios.post("/login", {
        email,
        password,
      },);
      setUser(userInfo.data);
      console.log(userInfo);
      alert("User logged in successfully");
      setRedirect(true);
    } catch (err) {
      alert("Login failed, please try again");
    }
  } // end loginUser

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl font-bold text-center mb-4">Login</h1>
        <form action="" className="max-w-md mx-auto" onSubmit={loginUser}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="primary">
            Login
          </button>
          <div className="text-center py-2">
            Don't have an account yet?__
            <Link to="/register" className="text-primary font-bold">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
