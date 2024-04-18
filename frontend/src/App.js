import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BooksList from "./components/book_list.component";
import BookCreate from "./components/book_create.component";
import UpdateBook from "./components/update_book.component";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BooksList />} exact />
      <Route path="/create" element={<BookCreate />} />
      <Route path="/update/:id" element={<UpdateBook />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
