import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios
import "../../scss/books.scss";

const MultiActionAreaCard = () => {
  const [booksData, setBooksData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/books");
        setBooksData(response.data.data); // Set fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderBookDetails = () => {
    return booksData.map((item) => {
      return (
        <Card
          key={item.id}
          sx={{
            maxWidth: "20rem",
            marginBottom: "40px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
          }}
        >
          <CardActionArea>
            <Link to="/book-info" style={{ textDecoration: "none" }}>
              <CardMedia
                component="img"
                image={item.thumbnail}
                alt="Book Thumbnail"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  id="cardTitle"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  id="cardDescription"
                >
                  Genre: {item.genre}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  id="cardDescription"
                >
                  Stocks: {item.stocks}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
          <CardActions>
            <div className="button-wrapper">
              <Button size="small" color="primary">
                <Link to="/book-info">View more</Link>
              </Button>
            </div>
          </CardActions>
        </Card>
      );
    });
  };

  return <>{renderBookDetails()}</>;
};

export default MultiActionAreaCard;
