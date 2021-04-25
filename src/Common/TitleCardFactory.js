import React from "react";
import { Typography, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cover: {
    height: 250,
    width: 250,
    margin: "auto",
    backgroundColor: "#FFFFFF00"
  },
  card: {
    display: "flex",
    backgroundColor: "#FFFFFF00",
    boxShadow: "None",
    padding: "10px 0 0 0",
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em"
    },
  }
}));

function TitleCardTemplate({source,name}) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={source}
          title="RecycleBin"
        />
      </Card>
      <Typography className={classes.title} variant="h3">{name}</Typography>
    </div>
  );
};

export default TitleCardTemplate;
