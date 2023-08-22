import { Link } from "react-router-dom";
import "../../scss/books.scss";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const BookCard = (props) => {
  const { title, imageUrl, author, id } = props;

  return (
    <div
      className="card container-fluid"
      style={{ width: "17rem", objectFit: "cover", padding: "0" }}
      id="card"
      key={id}
    >
      <img
        className="card-img-top"
        src={imageUrl}
        alt="Card image cap"
        id="image"
      />
      <div className="card-body">
        <h5 className="card-title" id="title">
          {title}
        </h5>
        <p className="card-text" id="auth">
          {author}
        </p>
        <Link to={`/book-info/${id}`}>
          {" "}
          <Button variant="contained">View more</Button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
