import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function BookInfo() {
  const { id } = useParams();
  const [booksInfo, setBooksInfo] = useState({
    id: "",
    title: "",
    author: "",
    subtitle: "",
    stocks: "",
    genre: "",
    imageUrl: "",
    literaryAwards: "",
    setting: "",
    characters: "",
    pages: "",
    published: "",
    publisher: "",
  });

  const fetchBooksInfo = async () => {
    const res = await axios(`http://localhost:8000/api/v1/books/${id}`);
    const response = await axios(
      `http://localhost:8000/api/v1/book-details/${id}`
    );
    console.log(response.data.data[0]);

    const bookDetails = response.data.data;
    const bookResult = res.data.data;
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
  return (
    <>
      <main className=" flex-column  mt-5">
        <div className="container d-flex flex-wrap ">
          <img
            src={booksInfo.imageUrl}
            className="col-lg-6 mb-5"
            alt="..."
            style={{ width: "26rem", height: "25rem", margin: "5rem" }}
          />
          <p className="position-absolute text-Primary border bg-light">
            <b style={{ borderTop: "2rem" }}>Available: {booksInfo.stocks} </b>
          </p>

          <div className="ms-lg-5 container-fluid flex-wrap col-lg-6">
            <br />
            <br />
            <h1>{booksInfo.title}</h1>
            <h3>By: {booksInfo.author}</h3>
            <p>{booksInfo.subtitle}</p>
            <dd>
              <b>Genre:</b> {booksInfo.genre}
            </dd>

            <p>
              <b>Literary Awards:</b> {booksInfo.literaryAwards}
            </p>
            <p>
              <b>Characters:</b> {booksInfo.characters}
            </p>
            <p>
              <b>Setting:</b> {booksInfo.setting}
            </p>
            <p>
              <b>Published:</b> {booksInfo.published}
            </p>
            <p>
              <b>Publisher:</b> {booksInfo.publisher}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default BookInfo;
