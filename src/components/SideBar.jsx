function SideBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item"> 
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
