import React from "react";
import SignIn from "./SignIn.jsx";
import logo from "../assets/lend-hub-logo.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center w-100">
          <div className="col-6">
            <div className="navbar-brand"><img src={logo} width={150} /></div>
          </div>
          <div className="col-6">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            ></div>
          </div>
        </div>
        <SignIn />
      </div>
    </nav>
  );
}

export default NavBar;
