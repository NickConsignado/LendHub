import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Container, TextField, InputAdornment } from "@mui/material";
import MultiActionAreaCard from "../components/Books.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Carousel from "../components/Carousel.jsx";
import SideBar from "../components/SideBar.jsx";
import SearchIcon from "@mui/icons-material/Search";
import Advertisement from "../components/Advertisement.jsx";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [booksData, setBooksData] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/books");
        setBooksData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
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

  // Filtering logic based on searchTerm and selectedGenres
  const filteredBooks = booksData.filter((item) => {
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

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-lg-2 pt-lg-5">
            <SideBar value={value} handleChangeRadio={handleChangeRadio} />
          </div>
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
              {filteredBooks.length === 0 ? (
                <div
                  className="no-data"
                  sx={{ display: "flex", width: "auto" }}
                >
                  <img
                    src="https://learncab.com/assets/images/no-data-found.png"
                    alt="No Data"
                  />
                </div>
              ) : (
                <MultiActionAreaCard data={filteredBooks} />
              )}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
