import { Link } from "react-router-dom";
import logo from "../assets/lend-hub-logo.png"; // Adjust the path based on your directory structure

function Footer() {
  return (
    <>
      <div>
        <div className="container mt-5 pt-5 text-center ">
          <hr />
          <div className="row">

            <div className="col-lg-5">
              <h2>
                {" "}
                <img src={logo} width={200} />
              </h2>
              <p className="text-secondary">
                LendHub is the largest marketplace for users resources, powered
                by a community of educators.
              </p>
              <div className="d-flex justify-content-evenly pt-5 text-success mb-5 ">
                <i className="fa-brands fa-facebook fa-xl"></i>
                <i className="fa-brands fa-instagram fa-xl"></i>
                <i className="fa-brands fa-pinterest fa-xl"></i>
                <i className="fa-brands fa-twitter fa-xl"></i>
              </div>
            </div>

            <div className="col-lg-2">
              <h2 className="text-primary mb-3">ABOUT</h2>
              <div className="text-secondary">
                <p>Who We Are</p>
                <p>We're Hiring</p>
                <p>Press</p>
                <p>Blog</p>
              </div>
            </div>

            <div className="col-lg-2">
              <h2 className="text-primary mb-3">SUPPORT</h2>
              <div className="text-secondary">
                <p>Help & FAQ</p>
                <p>Privacy Policy</p>
                <p>Users Privacy</p>
                <p>Terms of Service</p>
              </div>
            </div>

            <div className="col-lg-3">
              <h2 className="text-primary mb-3">UPDATES</h2>
              <p className="text-secondary">
                Get our weekly newslatter with free resoures, updates, and
                special offers.
              </p>
            </div>
          </div>
          <div className="container">
            <hr />
            <small className="d-flex justify-content-center mt-3 mb-3 text-secondary">
              <b>Copyright © 2023 LendHub</b>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
