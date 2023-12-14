import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function MyBooks() {
  const { action } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [books, setBooks] = useState([]);

  const [title, setTitle] = useState("");
  const [authorReal, setAuthorReal] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [cover, setCover] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  function handleSubmit(e) {
    if (
      title === "" ||
      authorReal === "" ||
      description === "" ||
      genre === "" ||
      numberOfPages === "" ||
      cover === "" ||
      publishedDate === ""
    ) {
      alert("Please fill all the fields");
      return;
    } 
    e.preventDefault();
    axios
      .post("/addBook", {
        title,
        authorReal,
        description,
        genre,
        numberOfPages,
        cover,
        publishedDate,
      })
      .then((res) => {
        setRedirect(true);
        alert("Book added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Book addition failed");
      });
  }

  if (redirect) {
    return <Navigate to="/accountPage/MyBooks" />;
  }

  useEffect(() => {
    axios.get("/getMyBooks").then((res) => {
      setBooks(res.data);
    });
    
  }, []);

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
            value={authorReal}
            onChange={(e) => {
              setAuthorReal(e.target.value);
            }}
            placeholder="Enter the Real author of the book, or your name if you are the author"
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
      <br />
      <h2 className="text-3xl font-semibold mb-6">Your Books</h2>
      <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {books.map((book) => {
          return (
            <Link
              to={`/bookDetails/${book._id}`}
              key={book._id}
              className="flex items-center p-6 rounded-lg border border-gray-400 gap-4 bg-bgSecondary"
            >
              <div className="mb-4">
                <img
                  src={book.cover}
                  alt={`${book.title} Cover`}
                  className="w-48 h-48 object-cover rounded-md"
                />
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="mb-4 border-b border-gray-500 bg-bgSecondary  px-3">
                    <strong className="text-lg">Title:</strong> {book.title}
                  </div>
                  <div className="mb-4 border-b border-gray-500 bg-bgSecondary  px-3">
                    <strong className="text-lg">Author:</strong>{" "}
                    {book.authorReal}
                  </div>
                </div>
                <div className="mb-4 border-b border-gray-500 bg-bgSecondary  px-3">
                  <strong className="text-lg ">Description:</strong>{" "}
                  {book.description}
                </div>
                {/* Add more details as needed */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
} // end IndexPage

export default MyBooks;
