import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookInfo from "./pages/BookInfo";
import Footer from "./components/Footer";
import BorrowedList from "./pages/BorrowedList";
import "bootstrap/dist/js/bootstrap.js";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-info" element={<BookInfo />} />
            <Route path="/borrowed-list" element={<BorrowedList />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
