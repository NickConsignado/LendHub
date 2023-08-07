import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
    <div className="container mt-5"></div>
   <div className="container mt-5 pt-lg-5"></div>
    <div className="container mt-5 pt-5">
      <div className="container">
        <div className="container col-lg-4">
          <form className="px-4 py-3">
            <h3 className="text-center">Login</h3>
            <div className="mb-3">
              <label for="email" className="form-label">
                User Account
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Username"
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                />
                <label className="form-check-label" for="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>

            <div className="text-center">
              <Link to="/home">
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </Link>
            </div>
            <div className="dropdown-divider my-2"></div>
            <div className="d-flex justify-content-center">
              <p>No Account yet?</p>
              <span>
                <Link
                  to="/sign-up"
                  className="dropdown-item text-center"
                  href="#"
                >
                  <b> Sign up here</b>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>  
      </div>
    </>
  );
}

export default LoginPage;
