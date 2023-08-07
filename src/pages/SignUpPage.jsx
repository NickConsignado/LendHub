import { useState } from "react"
import { Link } from "react-router-dom"


function SignUpPage () {
    // const [confirmPassword, setConfirmPassword] = useState();
    // const [username, setUsername] = useState();
    // const [fullName, setFullName] = useState();
    // const [email, setEmail] = useState();


//   function checkPasswordMatch() {
//   const password = document.getElementById("passwordInput").value;
//   const confirmPassword = document.getElementById("confirmPasswordInput").value;

//   if(password.length > 0){
//     if(password == confirmPassword){
//       alert("Password Match!");
//     }else{
//       alert("Password DID NOT Match!");
//     }
//   }
//   }

    return (
        <>
        <div className="container mt-5"></div>
        <div className="container mt-5 pt-lg-5"></div>
        <div className="container">
        <div className="container col-lg-4">
          <form className="px-4 py-3">
            <h3 className="text-center">Sign Up Page</h3>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                User Account:
              </label>
              <input
                type="text"
                className="form-control"
                id="Username"
                placeholder="Username"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="FullName" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="FullName"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                placeholder="Password"
                required
             
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPasswordInput"
                placeholder="Password"
                required
                // onBlur={setConfirmPassword()}
              />
            </div>


            <div className="d-flex justify-content-evenly">
            <div>
                <Link to="/"><button type="submit" className="btn btn-outline-primary">
                  Cancel
                </button></Link>
            </div>
            <div className="text-center">
                <button type="submit"  className="btn btn-outline-primary">
                  Confirm
                </button>
            </div>
            </div>
        

          </form>
        </div>
      </div>
        </>
    )
}

export default SignUpPage