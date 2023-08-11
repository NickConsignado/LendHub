import { Link } from "react-router-dom";
import logo from "../assets/lend-hub-logo.png"; // Adjust the path based on your directory structure

function Footer() {
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(79deg, #35d9df, #7bddac, #397fdb)",
        }}
      >
        <div className="container mt-5 pt-5 text-white">
          <div className="row">
            <div className="col-5">
              <h2>
                {" "}
                <img src={logo} alt="Lend Hub Logo" />
              </h2>
              <p>
                LendHub is the largest marketplace for users resources, powered
                by a community of educators.
              </p>
              <div className="d-flex justify-content-evenly pt-5">
                <i className="fa-brands fa-facebook fa-xl"></i>
                <i className="fa-brands fa-instagram fa-xl"></i>
                <i className="fa-brands fa-pinterest fa-xl"></i>
                <i className="fa-brands fa-twitter fa-xl"></i>
              </div>
            </div>

            <div className="col-2">
              <h2>ABOUT</h2>
              <p>Who We Are</p>
              <p>We're Hiring</p>
              <p>Press</p>
              <p>Blog</p>
            </div>

            <div className="col-2">
              <h2>SUPPORT</h2>
              <p>Help & FAQ</p>
              <p>Privacy Policy</p>
              <p>Users Privacy</p>
              <p>Terms of Service</p>
            </div>

            <div className="col-3">
              <h2>UPDATES</h2>
              <p>
                Get our weekly newsletter with free resoures, updates, and
                special offers.
              </p>
            </div>
          </div>
          <div className="container">
            <hr />
            <small className="d-flex justify-content-center mt-3 mb-3">
              Copyright © 2023 LendHub
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
