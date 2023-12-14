import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function ProgressDetails() {
  const { id } = useParams();
  const [progress, setProgress] = useState([]);
  const [newCurrentPage, setNewCurrentPage] = useState("");
  const currentPage = progress.currentPage;


  useEffect(() => {
    axios
      .get(`/progressDetails/${id}`)
      .then((res) => {
        setProgress(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function update(e) {
    e.preventDefault();
    const num = newCurrentPage > progress.numberOfPages || newCurrentPage < 0;
    if (num) {
      alert("Please enter a valid page number");
      
      return;
    }
    axios
      .post("/updateProgress", {
        id,
        newCurrentPage,
        currentPage,
      })
      .then((res) => {
        alert("Progress updated successfully");
        
      })
      .catch((err) => {
        console.log(err);
        alert("Progress update failed");
      });
  }

  return (
    <div className="mt-8  px-40">
      <div className="flex items-center p-6 gap-8 border border-gray-400 rounded-lg">
        <div className="mr-4">
          <img
            src={progress.cover}
            alt={`${progress.title} Cover`}
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
        <div>
          <div className="border-b border-primary pb-2 mb-4">
            <span className="font-semibold text-xl">{progress.title}</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold text-xl">
              Current Page: {progress.currentPage} out of{" "}
              {progress.numberOfPages}
            </span>
          </div>
          <div>
            <form action="" onSubmit={update}>
              <label
                htmlFor="currentPage"
                className="text-xl font-semibold mb-4"
              >
                Current Page:
              </label>
              <input
                type="number"
                name="currentPage"
                value={newCurrentPage}
                onChange={(e) => {
                  setNewCurrentPage(e.target.value);
                }}
                placeholder="Enter the current page"
             className="w-full p-2 border rounded-md border-gray-300 mb-4"
              />
              <button className="primary" type="submit">
                Update your progress
              </button>
            </form>

            {/* <button className="primary" onClick={update}>
              Update your progress 
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
} // end IndexPage

export default ProgressDetails;
