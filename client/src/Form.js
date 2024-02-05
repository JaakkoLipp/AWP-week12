import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const BookForm = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      name,
      author,
      pages: parseInt(pages),
    };

    fetch("/api/book/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Book successfully submitted:", data);
        // Redirect to the book page
        history.push(`/book/${encodeURIComponent(name)}`);
      })
      .catch((error) => {
        console.error("Error submitting book:", error);
        // Handle the error if needed
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Book Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="author">Book Author:</label>
      <input
        type="text"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <label htmlFor="pages">Book Pages:</label>
      <input
        type="number"
        id="pages"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default BookForm;
