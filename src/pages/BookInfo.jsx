import { Link } from "react-router-dom";
import MyComponentyarn from "../components/Api.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function BookInfo() {
  const [booksInfo, setBooksInfo] = useState({});

  const fetchBooksInfo = async () => {
    const res = await axios("http://localhost:8000/api/v1/books");
    console.log(res.data.data[0]);
    const bookResult = res.data.data[0];
    const bookObj = {
      author: bookResult.author,
      genre: bookResult.genre,
      imageUrl: bookResult.imageUrl,
      stocks: bookResult.stocks,
      subtitle: bookResult.subtitle,
      title: bookResult.title,
    };

    setBooksInfo(bookObj);
  };

  useEffect(() => {
    fetchBooksInfo();
  }, []);
  return (
    <>
      <Link to="/">
        <button className="btn btn-primary">Go back</button>
      </Link>
      <main className="w-100 d-flex flex-column align-items-center mt-5">
        <div className="container d-flex flex-wrap row justify-content-center">
          <img
            src={booksInfo.imageUrl}
            className="card-img-top col-6"
            alt="..."
            style={{ width: "15rem" }}
          />
          <ul className=" text-center flex-wrap">
            <h3>{booksInfo.title}</h3>
            <p className="text-center">{booksInfo.author}</p>
            <p className=" text-start">{booksInfo.subtitle}</p>
            <div className="text-start">
              <p>309 pages, Hardcover</p>
              <p>First published June 26, 1997</p>
            </div>
            <div className="text-start">
              <h5>Literary awards</h5>
              <p></p>

              <h5>Original Title</h5>
              <p>Harry Potter and the Philosopher's Stone</p>

              <h5>Series</h5>
              <p>Harry Potter (#1)</p>

              <h5>Setting</h5>
              <p>
                London, England (, 1991), Hogwarts School of Witchcraft and
                Wizardry (United Kingdom, 1991)
              </p>

              <h5>Characters</h5>
              <p></p>
            </div>
          </ul>
        </div>
      </main>
    </>
  );
}

export default BookInfo;
