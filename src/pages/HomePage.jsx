import React from "react";
import { Grid, Card } from "@mui/material";
import MultiActionAreaCard from "../components/Books.jsx";
import NavBar from "../components/NavBar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import "./HomePage.scss";
import Carousel from "../components/Carousel.jsx";

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
          <div className="container col-9 mt-5 pt-5">
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
              <div>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>

                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
              </div>

              <div>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>

                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
              </div>

              <div>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>

                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
              </div>

              <div>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>

                <Card sx={{ maxWidth: 250, marginBottom: "40px" }}>
                  {<MultiActionAreaCard />}
                </Card>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
