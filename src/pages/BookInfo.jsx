import { Link } from "react-router-dom";
import MyComponentyarn from "../components/Api.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function BookInfo() {
  const [booksInfo, setBooksInfo] = useState({});
  const [booksDetail, setBooksDetails] = useState({});

  const fetchBooksInfo = async () => {
    // ------------------------books-------------------------------------

    const res = await axios("http://localhost:8000/api/v1/books");

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

  const fetchBooksDetails = async () => {
    //----------------------------details------------------------------------

    const response = await axios("http://localhost:8000/api/v1/book-details");

    const bookOtherDetails = response.data.data[0];
    const bookDetailsObj = {
      awards: bookOtherDetails.literaryAwards,
      pages: bookOtherDetails.pages,
      characters: bookOtherDetails.characters,
      published: bookOtherDetails.published,
      setting: bookOtherDetails.setting,
    };

    setBooksDetails(bookDetailsObj);
  };

  useEffect(() => {
    fetchBooksDetails();
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
              <p>
                <b>Pages:</b> {booksDetail.pages}
              </p>
              <p>
                <b>Published date:</b> {booksDetail.published}
              </p>
            </div>
            <div className="text-start">
              <p>
                <b>Awards:</b> {booksDetail.awards}
              </p>
              <p>
                <b>Settings:</b> {booksDetail.setting}
              </p>
              <p>
                <b>Characters:</b> {booksDetail.characters}
              </p>
            </div>
          </ul>
        </div>
      </main>
    </>
  );
}

export default BookInfo;
