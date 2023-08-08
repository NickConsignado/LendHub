import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-info" element={<BookInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
