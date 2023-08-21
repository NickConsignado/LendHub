import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookInfo from "./pages/BookInfo";
import Footer from "./components/Footer";
import BorrowedList from "./pages/BorrowedList";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import store from "./store/store";
import BookList from "./pages/BookList";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./components/Theme.jsx"; // Import your theme
import axios from 'axios';


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-info" element={<BookInfo />} />
            <Route path="/borrowed-list" element={<BorrowedList />} />
            <Route path="/book" element={<BookList />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
