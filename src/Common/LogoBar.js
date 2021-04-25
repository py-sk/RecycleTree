import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  image: {
    position: "relative",
    maxWidth: "90%",
    margin: "10px",
    [theme.breakpoints.up("sm")]: {
      maxHeight: "150px",
    },
  },
  background: {
    backgroundColor: "#c6ebc9",
  },
}));

export default function LogoBar() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.background}>
        {" "}
        <img
          alt="RecycleTree Logo"
          className={classes.image}
          src={`static/banner.png`}
        />
      </Paper>
    </div>
  );
};
