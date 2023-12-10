import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl font-bold text-center mb-4">Login</h1>
        <form action="" className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
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
