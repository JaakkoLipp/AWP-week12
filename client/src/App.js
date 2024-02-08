import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookForm from "./Form";
import BookInfo from "./BookInfo";
import NotFound from "./NotFound"; // Import the NotFound component

function App() {
  return (
    <Router>
      <h1>Books</h1> {}
      <Route path="/" exact component={BookForm} />
      <Route path="/book/:bookName" component={BookInfo} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}

export default App;
