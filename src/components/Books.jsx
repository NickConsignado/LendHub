import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import "../../scss/books.scss";

const MultiActionAreaCard = (data) => {
  const renderBookDetails = () => {
    return data.data.map((item) => {
      return (
        <>
          <Card
            sx={{
              maxWidth: 250,
              marginBottom: "40px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            <CardActionArea>
              <Link to="/book-info" style={{ textDecoration: "none" }}>
                <CardMedia
                  component="img"
                  image="https://covers.openlibrary.org/b/id/10716377-L.jpg"
                  alt="green iguana"
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
                    {item.description}
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
        </>
      );
    });
  };

  return <>{renderBookDetails()}</>;
};

export default MultiActionAreaCard;
