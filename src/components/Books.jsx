import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300, maxHight: 1000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP.e1H7N8JV9C6kKS4goIvxFwHaLz?w=192&h=307&c=7&r=0&o=5&pid=1.7"
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
          View more
        </Button>
      </CardActions>
    </Card>
  );
}

export default MultiActionAreaCard;
