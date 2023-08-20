import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    console.log("event", event);
    setSearchTerm(event.target.defaultValue);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 1,
        ms: 4,
        textAlign: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.9)",
      }}
    >
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
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
  );
};

export default SearchBar;
