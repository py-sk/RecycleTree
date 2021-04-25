import React from "react";
import { Typography, Paper, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: "95%",
    margin: "auto !important",
    backgroundColor: "rgba(112, 175, 133, 0.67)",
    borderRadius: "10px !important",
  },
  expanded: {
    margin: "auto !important",
    borderRadius: "10px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  heading2: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
    color: "#215125",
    marginBottom: "20px"
  },
  accordionSummary: {
    backgroundColor: "#c6ebc9",
    borderRadius: "10px",
  },
  infoPaper: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
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
  infoPaperBlank: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
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
  imageIcon: {
    height: "inherit",
    width: "inherit",
  },
  iconRoot: {
    textAlign: "center",
  },
  mapsLink: {
    marginTop: theme.spacing(1),
    color: "#0d6894",
  },
  exist: {
    margin: "auto",
  },
  preview: {
    maxWidth: "80%",
    marginTop: theme.spacing(1),
  },
}));

const ResultsPanel = ({ mat, item, yes, no, preview }) => {
  const classes = useStyles();
  if (mat) {
    return (
      <div>
        <Paper elevation={3} variant="outlined" className={classes.infoPaper}>
          <div className={classes.centralIconContainer}>
            <Avatar
              src="static/pillarLogos/canMehLogo.png"
              className={classes.centralIcon}
            />
          </div>
          <img src={preview} className={classes.preview} />
          <Typography className={classes.heading2}>Material: {mat}</Typography>
          <Typography className={classes.heading2}>Item: {item}</Typography>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid xs={12} item>
                  <Typography variant="h5" className={classes.wrapIcon}>
                    Can it be recycled?
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant="subtitle1" className={classes.wrapIcon}>
                    {" "}
                    {yes}
                  </Typography>
                </Grid>

                <Grid xs={12} item>
                  <Typography variant="h5" className={classes.wrapIcon}>
                    You shouldn't recycle this if...
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Typography variant="subtitle1" className={classes.wrapIcon}>
                    {" "}
                    {no}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  } else {
    return (
      <div>
        <Paper elevation={3} variant="outlined" className={classes.infoPaperBlank}>
          <div className={classes.centralIconContainer}>
            <Avatar
              src="static/pillarLogos/canMehLogo.png"
              className={classes.centralIcon}
            />
          </div>
          <Typography className={classes.heading2}>
            Upload An Image of Your Waste Above!
          </Typography>
          <img src={preview} className={classes.preview} />
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Typography align="left" variant="subtitle1" className={classes.wrapIcon}>
                    <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                    Recycle Can Meh takes image data and identifies the
                    recyclability of a material.
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography align="left" variant="subtitle1" className={classes.wrapIcon}>
                    <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                    Images can either be taken directly from the phone’s camera,
                    or uploaded as a JPG, JPEG, PNG file.
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography align="left" variant="subtitle1" className={classes.wrapIcon}>
                    <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                    Images uploaded to Recycle Can Meh are never saved or
                    indexed. Checking whether items are recyclable through
                    Recycle Can Meh is private and secure.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
};
export default ResultsPanel;
