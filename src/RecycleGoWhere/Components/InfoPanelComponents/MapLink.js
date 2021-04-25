import React from "react";
import { Typography, Link } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mapsLink: {
    marginTop: theme.spacing(1),
    color: "#0d6894",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
}));

const MapLink = ({ metadata }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.mapsLink}>
      <RoomIcon style={{ fontSize: 15 }} />{" "}
      <Link
        className={classes.mapsLink}
        href={
          "http://www.google.com/maps/place/" +
          metadata["lat"] +
          "," +
          metadata["lon"]
        }
      >
        {metadata["PostalCode"]}
      </Link>{" "}
      <OpenInNewIcon style={{ fontSize: 15 }} />
    </Typography>
  );
};

export default MapLink;
