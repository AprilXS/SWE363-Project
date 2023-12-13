import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function MyBooks() {
  const { user } = useContext(UserContext);
  const { action } = useParams();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [cover, setCover] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  function handleSubmit(e) {
    console.log(e.target.value);
  }

  return (
    <div className="mt-12 text-center">
      {action !== "AddBook" && (
        <div className="inline-flex">
          <Link
            to={"/accountPage/MyBooks/AddBook"}
            className="border my-2 py-2 px-12 rounded-2xl bg-primary text-white"
          >
            <div className="text-lg">Add Book</div>
          </Link>
        </div>
      )}
      {action === "AddBook" && (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
        <h2 className="text-2xl mb-4">Title</h2>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter the title"
          className="w-full p-2 border border-gray-300 mb-4"
        />
      
        <h2 className="text-2xl mb-4">Author</h2>
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          placeholder="Enter the author"
          className="w-full p-2 border border-gray-300 mb-4"
        />
      
        <h2 className="text-2xl mb-4">Description</h2>
        <textarea
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Enter the description"
          className="w-full p-2 border border-gray-300 mb-4"
        ></textarea>
      
        <h2 className="text-2xl mb-4">Genre</h2>
        <input
          type="text"
          name="genre"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
          placeholder="Enter the genre"
          className="w-full p-2 border border-gray-300 mb-4"
        />
      
        <h2 className="text-2xl mb-4">Number of Pages</h2>
        <input
          type="number"
          name="numberOfPages"
          value={numberOfPages}
          onChange={(e) => {
            setNumberOfPages(e.target.value);
          }}
          placeholder="Enter the number of pages"
          className="w-full p-2 border border-gray-300 mb-4"
        />
      
        <h2 className="text-2xl mb-4">Cover</h2>
        <input
          type="text"
          name="cover"
          value={cover}
          onChange={(e) => {
            setCover(e.target.value);
          }}
          placeholder="Enter the cover URL"
          className="w-full p-2 border border-gray-300 mb-4"
        />
      
        <h2 className="text-2xl mb-4">Published Date</h2>
        <input
          type="date"
          name="publishedDate"
          value={publishedDate}
          onChange={(e) => {
            setPublishedDate(e.target.value);
          }}
          placeholder="Select the published date"
          className="w-full p-2 border border-gray-300 mb-4"
        />
      
        <button
          type="submit"
          className="border my-2 py-2 px-12 rounded-2xl bg-primary text-white"
        >
          Add Book
        </button>
      </form>
      
      )}
    </div>
  );
} // end IndexPage

export default MyBooks;

{
  /* <div className="flex flex-col items-center p-6 rounded-lg mt-12">
        <h2 className="text-2xl font-semibold mb-4">Your Books</h2>
        <div className="mb-2 border-b-4">
          <strong>Name:</strong> {user.firstName} {user.lastName}
        </div>
      </div> */
}

//   <div className="inline-flex">
//     <Link
//       to={"/accountPage/MyBooks/AddBook"}
//       className="border my-2 py-2 px-12 rounded-2xl bg-primary text-white"
//     >
//       <div className="text-lg">Add Book</div>
//     </Link>
//   </div>
