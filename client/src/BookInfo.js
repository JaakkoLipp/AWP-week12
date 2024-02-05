import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookInfo = () => {
  const [book, setBook] = useState(null);
  const { bookName } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`/api/book/${bookName}`);
      const data = await response.json();
      setBook(data);
    };

    fetchBook();
  }, [bookName]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{decodeURIComponent(book.name)}</h1>
      <p>Author: {book.author}</p>
      <p>Pages: {book.pages}</p>
    </div>
  );
};

export default BookInfo;
