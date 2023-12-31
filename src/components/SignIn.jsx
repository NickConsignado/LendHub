import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

function SignIn() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span className="text-primary">
          <i className="text-secondary fa-solid fa-user-tie fa-2xl"></i>
        </span>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Link
          to="/borrowed-list"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Borrowed List</MenuItem>
        </Link>
        <Link to="/book" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem onClick={handleClose}>Book List</MenuItem>
        </Link>
        <Link
          to="/book-detail"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Book Detail</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        {/* <Link to="/book-detail" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem onClick={handleClose}>Book Detail</MenuItem>
        </Link>  */}
      </Menu>
    </div>
  );
}

export default SignIn;
