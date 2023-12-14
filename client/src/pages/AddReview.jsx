import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function addReview() {
  const { id } = useParams();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    if (review === "" || rating === "") {
      alert("Please fill all the fields");
      return;
    }
    if (rating > 5 || rating < 0) {
      alert("Please enter a valid rating");
      return;
    }
    e.preventDefault();
    axios
      .post("/addReview", {
        id,
        review,
        rating,
      })
      .then((res) => {
        alert("Review added successfully");

         
      })
      .catch((err) => {
        console.log(err);
        alert("Review addition failed");
        
      });
  }

  return (
    <div className="px-80 mt-40">
      <h2 className="text-3xl font-semibold mb-6">Review The Book</h2>
      <form
        action=""
        onSubmit={handleSubmit}
        className=" mt-6 p-8 border border-gray-300 rounded-md"
      >
        <div className="mb-4">
          <h2 className="text-xl mb-2">
            <label htmlFor="review" className="text-gray-700">
              Review
            </label>
          </h2>
          <textarea
            type="textarea"
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Enter your review"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-xl mb-2">
            <label htmlFor="rating" className="text-gray-700">
              Rating
            </label>
          </h2>
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Enter your rating out of 5"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <button
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
          type="submit"
        >
          Add Review
        </button>
      </form>
    </div>
  );
} // end addReview

export default addReview;
