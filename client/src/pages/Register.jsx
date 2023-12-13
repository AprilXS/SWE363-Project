import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type, setType] = useState("reader");

  async function registerUser(e) {
    e.preventDefault();
    try {
      const pass =
        password === confirmPassword
          ? password
          : alert("Passwords do not match");
      if (pass) {
        await axios.post("/register", {
          firstName,
          lastName,
          type,
          email,
          password,
        });
      } // end if
      alert("User registered successfully, Now you can login");
    } catch (err) {
      alert("Registration failed, please try again");
    }
  } // end registerUser

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl font-bold text-center mb-4">Register</h1>
        <form action="" className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <div className="flex items-center justify-evenly w-full border my-2 py-2 px-3 rounded-2xl">
            <div class="">
              <input
                id="radio-1"
                type="radio"
                value={type}
                onChange={(e) => {
                  setType("reader");
                }}
                name="bordered-radio"
                class="w-4 h-4"
              />
              <label
                for="radio-1"
                class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Reader
              </label>
            </div>
            <div class="">
              <input
                id="radio-2"
                type="radio"
                value={type}
                onChange={(e) => {
                  setType("author");
                }}
                name="bordered-radio"
                class="w-4 h-4 "
              />
              <label
                for="radio-2"
                class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Author
              </label>
            </div>
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button type="submit" className="primary">
            Register
          </button>
          <div className="text-center py-2">
            Already have an account?__
            <Link to="/login" className="text-primary font-bold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
} // end Register

export default Register;
