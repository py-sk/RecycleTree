import React, { useContext, useState } from "react";
import { Typography, Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BinsContext from "../Contexts/BinsContext";
import RadiusContext from "../Contexts/RadiusContext";
import YesNoContext from "../Contexts/YesNoContext";
import RatingsContext from "../Contexts/RatingsContext";
import PreFetch from "./InfoPanelComponents/PreFetch";
import NullResponse from "./InfoPanelComponents/NullResponse";
import BinCard from "./InfoPanelComponents/BinCardFactory";

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: "95%",
    margin: "auto !important",
    backgroundColor: "rgba(112, 175, 133, 0.67)",
    borderRadius: "10px !important",
  },
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

const InfoPanel = () => {
  const classes = useStyles();
  const { bins, setBins } = useContext(BinsContext);
  const { radius, setRadius } = useContext(RadiusContext);
  const [yesNoButtons, setYesNoButtons] = useState(Array(10).fill(null));
  const [ratingsButton, setRatingsButton] = useState(Array(10).fill(null));
  const yesNoValue = { yesNoButtons, setYesNoButtons };
  const ratingsValue = { ratingsButton, setRatingsButton };
  if (bins) {
    if (bins.length === 0) {
      return <NullResponse radius={radius} />;
    }
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
            List of Recycle Bins Within {radius}m Radius (max 5)
          </Typography>
          {Object.entries(bins).map(([k, v]) => {
            var dist = Object.keys(v)[0];
            var metadata = v[dist];
            return (
              <YesNoContext.Provider value={yesNoValue}>
                <RatingsContext.Provider value={ratingsValue}>
                  <BinCard dist={dist} metadata={metadata} />
                </RatingsContext.Provider>
              </YesNoContext.Provider>
            );
          })}
        </Paper>
      </div>
    );
  } else {
    return <PreFetch />;
  }
};

export default InfoPanel;
