import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookInfo from "./pages/BookInfo";
import Footer from "./components/Footer";
import BorrowedList from "./pages/BorrowedList";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
         <NavBar />
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
