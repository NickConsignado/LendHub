import React from "react";
import { Grid, Card } from "@mui/material";
import MultiActionAreaCard from "../components/Books.jsx";
import NavBar from "../components/NavBar.jsx";
import SearchBar from "../components/SearchBar.jsx";


function HomePage() {
  return (
    <>
      <NavBar />
      <div>
      <SearchBar />
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          {/* sort */}
          <div className="col-2 pt-5 mt-5">
            <div
              className="card"
              style={{
                height: "100rem",
                width: "auto",
              }}
            ></div>
          </div>
          {/* cards */}
          <div className="container col-10 mt-5 pt-5">
            <Grid
              container
              spacing={0.5}
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                padding: "1rem",
              }}
            >
              <Card sx={{ maxWidth: 250, marginBottom: "16px" }}>
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
              </Card>
              <Card sx={{ maxWidth: 250, marginBottom: "16px" }}>
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
              </Card>
              <Card sx={{ maxWidth: 250, marginBottom: "16px" }}>
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
              </Card>
              <Card sx={{ maxWidth: 250, marginBottom: "16px" }}>
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
                {<MultiActionAreaCard />}
              </Card>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
