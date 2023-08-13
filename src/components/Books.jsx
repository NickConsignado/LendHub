import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300, maxHight: 1000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://covers.openlibrary.org/b/id/10716377-L.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/book-info" style={{ textDecoration: "none" }}>
            View more
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default MultiActionAreaCard;
