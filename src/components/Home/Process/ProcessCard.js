import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    background: "#A9DFBF",
  },
});

export default function ProcessCard({ id, heading, details, img }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <p style={{ textAlign: "center", fontSize: 20, color: "#1C2833" }}>
            <b>Step: {id}</b>
          </p>

          <CardMedia
            style={{ padding: 15 }}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <b>{heading}</b>
            </Typography>
            <Typography
              style={{ fontSize: 16, color: "#1C2833" }}
              variant="body2"
              color="textSecondary"
              component="h5"
            >
              {details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
