const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Connect to your MongoDB database
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

// Create a book schema
const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  pages: Number,
});

// Create a book model
const Book = mongoose.model("Book", bookSchema);

// Parse JSON bodies
app.use(bodyParser.json());

// POST route to save a book
app.post("/api/book", (req, res) => {
  const { name, author, pages } = req.body;

  // Create a new book instance
  const newBook = new Book({
    name,
    author,
    pages,
  });

  // Save the book to the database
  newBook
    .save()
    .then(() => {
      res.status(201).json({ message: "Book saved successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to save the book" });
    });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
