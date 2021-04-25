import React from "react";
import { Typography, Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  heading2: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
    color: "#215125",
  },
  infoPaper: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "35%",
    },
    maxWidth: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    marginTop: theme.spacing(8),
    borderRadius: 25,
  },
  centralIcon: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "auto",
  },
  centralIconContainer: {
    marginTop: theme.spacing(-7),
  },
}));
const NullResponse = ({radius}) => {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} variant="outlined" className={classes.infoPaper}>
        <div className={classes.centralIconContainer}>
          <Avatar
            src="static/pillarLogos/goWhereLogo.png"
            className={classes.centralIcon}
          />
        </div>
        <Typography className={classes.heading2}>
          No Recycle Bins Within {radius}m Radius 
        </Typography>
        <Typography className={classes.heading2}>
          😔
        </Typography>
      </Paper>
    </div>
  );
};

export default NullResponse;
