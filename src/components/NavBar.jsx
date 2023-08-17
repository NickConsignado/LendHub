import React from "react";
import SignIn from "./SignIn.jsx";
import logo from "../assets/lend-hub-logo.png";
import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar d-flex">
      <div className="container-fluid">
        <div className="d-flex column justify-content-between align-items-center w-100">
          <div className="col-lg-6">
            <Link to="/" className="navbar-brand">
              <img src={logo} width={150} />
            </Link>
          </div>
          <SignIn />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
