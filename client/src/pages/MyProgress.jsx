import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function MyProgress() {
  const { user } = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [progresses, setProgresses] = useState([]);

  useEffect(() => {
    axios
      .get(`/myProgress/`)
      .then((res) => {
        setProgresses(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Your Progresses</h2>
      <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {progresses.map((progress) => (
          <Link to={`/accountPage/MyProgress/${progress.bookId}`}>
            <div className="flex items-center gap-8 border border-gray-400 rounded-lg">
              <div className="mr-4">
                <img
                  src={progress.cover}
                  alt={`${progress.title} Cover`}
                  className="w-48 h-48 object-cover rounded-md"
                />
              </div>
              <div>
                <div className="border-b border-primary pb-2 mb-4">
                  <span className="font-semibold text-xl">
                    {progress.title}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-xl">
                    Current Page: {progress.currentPage} out of{" "}
                    {progress.numberOfPages}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-xl">
                    Finished Reading: {progress.finishedReading ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} // end IndexPage

export default MyProgress;
