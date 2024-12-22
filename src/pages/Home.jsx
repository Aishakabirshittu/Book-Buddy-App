import React, { useState } from "react";
import axios from "axios";
import "../App.css"; 

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  const fetchBooks = async () => {
    if (!searchTerm) return;

    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`
      );
      setBooks(response.data.items || []);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <div className="home-container animated-bg p-8 flex flex-col items-center">
      <div>
      <img src="/Star4.svg" alt="Star" className="star" />
        <img src="/Star5.svg" alt="Star" className="star" />
        <img src="/Star6.svg" alt="Star" className="star" />
      </div>
      <h2 className="text-4xl font-bold text-primary mt-8 mb-4">Welcome to Book Buddy</h2>
      <p className="text-secondary mb-6 text-center">
        Discover your next favorite book by searching through millions of options!
      </p>
      <form onSubmit={handleSearch} className="w-full max-w-md flex items-center">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 border border-secondary rounded-l"
        />
        <button
          type="submit"
          className="bg-primary text-white p-2 rounded-r hover:bg-accent"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-secondary mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-8 grid gap-6 w-full max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <div
            key={book.id}
            className="p-4 border border-secondary rounded bg-gray-50 shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-primary">
              {book.volumeInfo.title}
            </h3>
            <p className="text-sm text-secondary">
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Unknown Author"}
            </p>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="w-full h-48 object-cover mt-2"
              />
            )}
            {book.accessInfo?.pdf?.isAvailable ? (
              <a
                href={book.volumeInfo.infoLink || book.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline mt-2 block"
              >
                <button className="bg-secondary text-white py-2 px-4 rounded mt-2 hover:bg-secondary/90 transition w-full">
                Download
                </button>
              </a>
            ) : (
              <p className="text-secondary mt-2">This book is not free to download.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
