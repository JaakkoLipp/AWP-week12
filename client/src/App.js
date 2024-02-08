import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookForm from "./Form";
import BookInfo from "./BookInfo";
import NotFound from "./NotFound"; // Import the NotFound component

function App() {
  return (
    <Router>
      <h1>Books</h1> {}
      <Routes>
        <Route path="/" element={<BookForm />} />
        <Route path="/book/:bookName" element={<BookInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

//comment
