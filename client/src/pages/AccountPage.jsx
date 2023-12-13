import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import MyBooks from "./MyBooks";

function AccountPage() {
  const { user, setUser, ready } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  function logout() {
    axios.post("/logout").then((res) => {
      setRedirect(true);
      setUser(null);
    });
  }

  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  if (!ready) {
    return <div>Loading...</div>;
  }

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "Myprofile";
  }

  function LinkClasses(type = null) {
    let classes = "border my-2 py-2 px-12 rounded-2xl";
    if (type === subpage) {
      classes += " bg-primary text-white";
    }
    return classes;
  }

  if (redirect && !user && !redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <nav className="w-full flex mt-8 gap-4 justify-center">
        <Link to={"/accountPage"} className={LinkClasses("Myprofile")}>
          My Profile
        </Link>
        {user.type === "author" && (
          <Link to={"/accountPage/MyBooks"} className={LinkClasses("MyBooks")}>
            My Books
          </Link>
        )}
        <Link
          to={"/accountPage/MyProgress"}
          className={LinkClasses("MyProgress")}
        >
          My Progress
        </Link>
      </nav>
      {subpage === "Myprofile" && (
        <div className="flex flex-col items-center p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <div className="mb-2 border-b-4">
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </div>
          <div className="mb-2 border-b-4">
            <strong>Email:</strong> {user.email}
          </div>
          <div className="mb-2 border-b-4">
            <strong>User Type:</strong> {user.type}
          </div>
          <button onClick={logout} className="primary max-w-lg">
            Logout
          </button>
        </div>
      )}
      {subpage === "MyBooks" && <MyBooks />}
    </div>
  );
} // end IndexPage

export default AccountPage;
