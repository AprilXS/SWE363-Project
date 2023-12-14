import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios
      .get(`/bookDetails/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function start() {
    axios
      .post("/startReading", {
        bookId: id,
        cover: book.cover,
        title: book.title,
        numberOfPages: book.numberOfPages,
      })
      .then((res) => {
        alert("Book added successfully");
        <Navigate to="/accountPage/MyProgress/"id />;
      })
      .catch((err) => {
        console.log(err);
        alert("Book addition failed");
      });
  }

  return (
    <div className="mt-8  px-40">
      <div className="flex items-center gap-8 border border-gray-400 rounded-lg">
        <div className="mr-4">
          <img
            src={book.cover}
            alt={`${book.title} Cover`}
            className="w-full h-128 object-cover rounded-md"
          />
          <Link to={`/accountPage/MyProgress/${book._id}`}>
            <button className="primary" onClick={start}>
                Start Reading
            </button>
            </Link>
        </div>
        <div>
          <div className="border-b border-primary pb-2 mb-4">
            <span className="font-semibold text-xl">{book.title}</span>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">Author:</span>
              <span>{book.authorReal}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">Genre:</span>
              <span>{book.genre}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">Number of Pages:</span>
              <span>{book.numberOfPages} pages</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">Published Date:</span>
              <span>{book.publishedDate}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-primary font-semibold mr-2">Rating:</span>
              <span>4/5</span>
            </div>
          </div>
          <div className="border-b border-primary pb-2 mb-4">
            <span className="font-semibold text-lg">Description:</span>
            <p className="mt-2">{book.description}</p>
          </div>
        </div>
      </div>
      {/* end of book details */}
      <div>
        <div>reviews</div>
        <div>chat</div>
      </div>
    </div>
  );
} // end IndexPage

export default BookDetails;
