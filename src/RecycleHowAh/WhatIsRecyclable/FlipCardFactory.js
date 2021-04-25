import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FlipCard from "react-flipcard3d";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
const useStyles = makeStyles((theme) => ({
  flipcard: {
    margin: "auto",
  },
  card: {
    maxWidth: "100%",
  },
  cardTitle: {
    background: "#00000000",
  },
  cardContent: {
    margin: "10px",
  },
}));

const materialsDict = {
  paper: {
    Yes:
      "Paper envelopes, carton juice boxes, newspapers, magazines, cardboard, boxes",
    No: "Tissues, paper towels, disposable wooden chopsticks, wax paper",
    ProperName: "Paper",
  },
  plastic: {
    Yes:
      "Plastic bottles, detergent bottles, skincare containers, plastic food containers, plastic clothes hanger",
    No:
      "Film covers (eg. chopsticks and crisp packets), disposable polystyrene food containers and disposable cutlery",
    ProperName: "Plastic",
  },
  metal: {
    Yes: "Metal can, aerosol can, clean aluminium tray and foil",
    No: "Cans contaminated with food/liquid waste",
    ProperName: "Metal",
  },
  glass: {
    Yes: "Glass bottles, glassware",
    No: "Mirror, ceramic products, light bulb",
    ProperName: "Glass",
  },
  others: {
    Yes: "Electronic waste (special cases)",
    No: "Food waste, batteries, nappies, stationery (pen and pencil)",
    ProperName: "Others",
  },
};

export default function MaterialFlipCard({ material }) {
  console.log(material);
  const classes = useStyles();
  return (
    <FlipCard className={classes.flipcard}>
      <FlipCard.Front color="#c6ebc9">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={materialsDict[material]["ProperName"]}
              height="500px"
              image={"static/materials/"+material + ".jpg"}
              title={materialsDict[material]["ProperName"]}
            />
          </CardActionArea>
        </Card>
        <Typography className={classes.cardTitle} variant="h5" component="h2" color="textPrimary">
          {materialsDict[material]["ProperName"]}
        </Typography>
      </FlipCard.Front>
      <FlipCard.Back color={"#c6ebc9"}>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          color="textPrimary"
        >
          {materialsDict[material]["ProperName"]}
        </Typography>
        <Typography variant="h5" color="textPrimary">
          ✅ Yes
        </Typography>

        <Typography
          gutterBottom
          variant="body1"
          color="textPrimary"
          className={classes.cardContent}
        >
          {materialsDict[material]["Yes"]}
        </Typography>
        <Typography variant="h5" color="textPrimary">
          ❌ No
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          color="textPrimary"
          className={classes.cardContent}
        >
          {materialsDict[material]["No"]}
        </Typography>
      </FlipCard.Back>
    </FlipCard>
  );
}
