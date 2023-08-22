import { Link, useParams } from "react-router-dom";
import MyComponentyarn from "../components/Api.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

function BookInfo() {
  const { id } = useParams();
  const [booksInfo, setBooksInfo] = useState({
    title: "",
    imageUrl: "",
    author: "",
    subtitle: "",
    stocks: "",
    genre: "",
    id: "",
  });
  const [booksDetail, setBooksDetails] = useState({
    literaryAwards: "",
    pages: "",
    characters: "",
    published: "",
    setting: "",
  });

  const fetchBooksInfo = async () => {
    // ------------------------books-------------------------------------

    const res = await axios(`http://localhost:8000/api/v1/books?${id}`);

    const bookResult = res.data.data[0];
    const bookObj = {
      id: bookResult.id,
      title: bookResult.title,
      author: bookResult.author,
      subtitle: bookResult.subtitle,
      stocks: bookResult.stocks,
      genre: bookResult.genre,
      imageUrl: bookResult.imageUrl,
    };
    setBooksInfo(bookObj);
  };
  useEffect(() => {
    fetchBooksInfo();
  }, []);

  const fetchBooksDetails = async () => {
    //----------------------------details------------------------------------

    const response = await axios(
      `http://localhost:8000/api/v1/book-details?${id}`
    );

    const bookOtherDetails = response.data.data[0];
    const bookDetailsObj = {
      literaryAwards: bookOtherDetails.literaryAwards,
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
      <br />
      <div
        container
        className="container-fluid"
        sx={{
          gap: "20px",
        }}
      >
        <div>
          <img
            src={booksInfo.imageUrl}
            className="col-lg-6 mb-5"
            alt="..."
            style={{ width: "30%", height: "auto", maxHeight: "25rem" }}
          />
          <Typography variant="h3">{booksInfo.title}</Typography>
          <Typography variant="body1" className="text-center">
            {booksInfo.author}
          </Typography>
          <Typography variant="body1" className="text-start">
            {booksInfo.subtitle}
          </Typography>
          <Typography>
            <b>Pages:</b> {booksDetail.pages}
          </Typography>
          <Typography>
            <b>Published:</b> {booksDetail.published}
          </Typography>
          <Typography variant="h5">Literary awards</Typography>
          <Typography>{booksDetail.literaryAwards}</Typography>
          {/* ... Other details ... */}
        </div>
        <div></div>
      </div>
      ;
    </>
  );
}

export default BookInfo;
