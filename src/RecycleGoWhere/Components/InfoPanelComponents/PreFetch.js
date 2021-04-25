import React from "react";
import { Typography, Paper, Grid, Avatar } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
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
      maxWidth: "75%",
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
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  linkIcon: {
    color: "#24982e",
  },
}));

const PreFetch = () => {
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
          Recycling Your Waste
        </Typography>

        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Typography align="left" variant="subtitle1" className={classes.wrapIcon}>
                  <CheckCircleOutlineIcon className={classes.linkIcon} /> Enter
                  your address in the search bar or click on the location button
                  at the right of the search bar to find the recycling bins
                  nearest to you.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="left" variant="subtitle1" className={classes.wrapIcon}>
                  <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                  Automatic detection of location requires Recycle Go Where to
                  gain access to your current location information.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="left" variant="subtitle1" className={classes.wrapIcon}>
                  <CheckCircleOutlineIcon className={classes.linkIcon} /> The
                  radius of your search may be modified by using the slider
                  located under the search bar.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="left" variant="subtitle1" className={classes.wrapIcon}>
                  <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                  Clicking on the postal code link of a bin will redirect you to
                  Google Maps.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="left" variant="subtitle1" className={classes.wrapIcon}>
                  <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                  Looking at recycling bin feedback by other users provides more
                  details on the recycling bin.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="left" variant="subtitle1" className={classes.wrapIcon}>
                  <CheckCircleOutlineIcon className={classes.linkIcon} /> The
                  user may also send their feedback by clicking on the ‘Yes’ or
                  ‘No’ buttons.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default PreFetch;
