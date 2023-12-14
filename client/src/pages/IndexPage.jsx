import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function IndexPage() {
  const [books, setBooks] = React.useState([]);

  useEffect(() => {
    axios
      .get(`/books`)
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Community Books</h2>
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

export default IndexPage;


// function IndexPage() {
//   return (
//     <div>
//       indexPage
//     </div>
//   );
// } // end IndexPage

// export default IndexPage;