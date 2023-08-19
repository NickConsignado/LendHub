import React from "react";
import SignIn from "./SignIn.jsx";
import logo from "../assets/lend-hub-logo.png";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar d-flex sticky-top">
        <div className="container-fluid">
          <div className="d-flex column justify-content-between align-items-center w-100">
            <div className="col-lg-6" sx={{ marginLeft: "2rem" }}>
              <Link to="/" className="navbar-brand" id="logos">
                <img src={logo} width={180} />
              </Link>
            </div>
            <SignIn />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
