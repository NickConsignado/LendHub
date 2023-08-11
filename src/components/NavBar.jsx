import React from "react";
import SignIn from "./SignIn.jsx";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center w-100">
          <div className="col-6">
            <div className="navbar-brand">Navbar</div>
          </div>
          <div className="col-6">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex justify-content-end">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <div>
                <SignIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
