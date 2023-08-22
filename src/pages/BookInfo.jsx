import { Link, useParams } from "react-router-dom";
import MyComponentyarn from "../components/Api.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function BookInfo() {
  const { id } = useParams();
  const [booksInfo, setBooksInfo] = useState({});
  const [booksDetail, setBooksDetails] = useState({});

  const fetchBooksInfo = async () => {
    // ------------------------books-------------------------------------

    const res = await axios("http://localhost:8000/api/v1/books");

    const bookResult = res.data.data[0];
    const bookObj = {
      id: bookResult.id,
      title: bookResult.title,
      author: bookResult.author,
      subtitle: bookResult.subtitle,
      stocks: bookResult.stocks,
      genre: bookResult.genre,
      imageUrl: bookResult.imageUrl,
      literaryAwards: bookDetails.literaryAwards,
      setting: bookDetails.setting,
      characters: bookDetails.characters,
      pages: bookDetails.pages,
      published: bookDetails.published,
      publisher: bookDetails.publisher,
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
      <main className=" flex-column  mt-5">
        <div className="container d-flex flex-wrap ">
          <img
            src={booksInfo.imageUrl}
            className="col-lg-6 mb-5"
            alt="..."
            style={{ width: "18rem", height: "25rem" }}
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
