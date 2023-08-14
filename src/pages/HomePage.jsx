import React from "react";
import { Grid, Card } from "@mui/material";
import MultiActionAreaCard from "../components/Books.jsx";
import NavBar from "../components/NavBar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import "./HomePage.scss";
import Carousel from "../components/Carousel.jsx";
import SideBar from "../components/SideBar.jsx";

function HomePage() {
  return (
    <>
      <NavBar />
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
        <SearchBar />
      </div>



      <div className="container-fluid text-center">
        <div className="row">
          {/* sort */}
          <div className="col-lg-2 pt-lg-5 mt-lg-5">
            <div>
              <SideBar />
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
