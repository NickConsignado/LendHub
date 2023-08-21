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
import "../../scss/HomePage.scss";
import Carousel from "../components/Carousel.jsx";
import SideBar from "../components/SideBar.jsx";
import SearchIcon from "@mui/icons-material/Search";
import data from "./books.json";
import Advertisement from "../components/Advertisement.jsx";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setData] = useState(data.books);

  //
  const [selectedGenres, setSelectedGenres] = useState([]);
  //

  const [value, setValue] = React.useState("");

  //
  const handleChangeRadio = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "all") {
      setSelectedGenres([]);
      setValue("all");
    } else {
      if (selectedGenres.includes("all")) {
        setSelectedGenres([selectedValue]);
        setValue(selectedValue);
      } else {
        setSelectedGenres([selectedValue]);
        setValue(selectedValue);
      }
    }
  };

  //

  // -------Searchbooks---------//
  useEffect(() => {
    const filteredBooks = data.books.filter((item) => {
      if (selectedGenres.includes("all")) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (selectedGenres.length === 0) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return (
        selectedGenres.includes(item.genre.toLowerCase()) &&
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setData(filteredBooks);
  }, [selectedGenres, searchTerm]);

  // -----------
  const handleChangeAll = (event) => {
    setIsDrama(event.target.checked);
  };
  // -----------

  const handleChangeDrama = (event) => {
    setIsDrama(event.target.checked);
  };
  const handleChangeHorror = (event) => {
    setIsHorror(event.target.checked);
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
      <div className="container-fluid text-center">
        <div className="row" sx={{ marginLeft: "0" }}>
          {/* sort */}
          <div className="col-lg-2 pt-lg-5" id="sideParentContainer">
            <div id="sidecontainer">
              <SideBar value={value} handleChangeRadio={handleChangeRadio} />
            </div>
            <div id="ads">
              <Advertisement />
            </div>
          </div>
          {/* cards */}
          <div className="container col-lg-9" id="searchbotparent">
            <div className="d-flex" id="searchbot">
              <Container sx={{ textAlign: "center", height: "5rem" }}>
                <TextField
                  id="search"
                  type="search"
                  label="Search"
                  value={searchTerm}
                  onChange={handleChange}
                  sx={{ width: 300 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Container>
            </div>
            <Carousel />
            <Grid
              container
              spacing={0.5}
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                padding: "1rem",
              }}
              id="Grid"
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
