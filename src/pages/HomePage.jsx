import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import MultiActionAreaCard from "../components/Books.jsx";
import SearchBar from "../components/SearchBar.jsx";
import "./HomePage.scss";
import Carousel from "../components/Carousel.jsx";
import SideBar from "../components/SideBar.jsx";
import SearchIcon from "@mui/icons-material/Search";
import data from "./books.json";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setData] = useState(data.books);

  const [value, setValue] = React.useState("");

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value !== "") {
      const searchBook = data.books.filter((item) => {
        return (
          item.genre.toLowerCase().includes(value) &&
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setData(searchBook);
    } else {
      setData(books);
    }
  });

  const handleChangeDrama = (event) => {
    setIsDrama(event.target.checked);
  };
  const handleChangeRomance = (event) => {
    setIsRomance(event.target.checked);
  };
  const handleChangeComedy = (event) => {
    setIsComedy(event.target.checked);
  };
  const handleChangeAdventure = (event) => {
    setIsAdventure(event.target.checked);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const searchBook = data.books.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setData(searchBook);
  };

  return (
    <>
      0
      <div className="d-flex align-items-baseline">
        <div className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <Container maxWidth="md" sx={{ mt: 1, ms: 4, textAlign: "center" }}>
          <TextField
            id="search"
            type="search"
            label="Search"
            value={searchTerm}
            onChange={handleChange}
            sx={{ width: 350 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            className=""
          />
        </Container>
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          {/* sort */}
          <div className="col-lg-2 pt-lg-5 mt-lg-5">
            <div>
              <SideBar value={value} handleChangeRadio={handleChangeRadio} />
            </div>
          </div>
          {/* cards */}
          <div className="container col-lg-9 mt-lg-5 pt-lg-5">
            <Carousel />
            <Grid
              container
              spacing={0.5}
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                padding: "1rem",
                boxShadow: "0 2rem 3rem rgba(000, 0.175);",
              }}
            >
              {books.length === 0 ? (
                <div> No Data Found </div>
              ) : (
                <MultiActionAreaCard data={books} />
              )}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
