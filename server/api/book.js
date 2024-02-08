const express = require("express");
const router = express.Router();
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
router.use(bodyParser.json());

// POST route to save a book
router.post("/book/:name", (req, res) => {
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

module.exports = router;
