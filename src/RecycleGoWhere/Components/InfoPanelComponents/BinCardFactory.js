import React, { useContext } from "react";
import {
  Button,
  Typography,
  Grid,
  Icon,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import MapLink from "./MapLink";
import YesNoContext from "../../Contexts/YesNoContext";
import RatingsContext from "../../Contexts/RatingsContext";
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
  accordionSummary: {
    backgroundColor: "#c6ebc9",
    borderRadius: "10px",
  },
  centralIcon: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "auto",
  },
  centralIconContainer: {
    marginTop: theme.spacing(-7),
  },
  imageIcon: {
    height: "inherit",
    width: "inherit",
  },
  iconRoot: {
    textAlign: "center",
  },
  exist: {
    margin: "auto",
  },
  mobileFont: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9em",
    },
  },
}));

function yesNoAPICall(metadata) {
  axios
    .post("https://recycletree.herokuapp.com/yesNo", {
      metadata: metadata,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}

function starAPICall(metadata) {
  axios
    .post("https://recycletree.herokuapp.com/star", {
      metadata: metadata,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}

const BinCard = ({ dist, metadata }) => {
  const classes = useStyles();
  const { yesNoButtons, setYesNoButtons } = useContext(YesNoContext);
  const { ratingsButton, setRatingsButton } = useContext(RatingsContext);
  return (
    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
        >
          <Icon classes={{ root: classes.iconRoot }}>
            <img className={classes.imageIcon} src="static/RecycleBin.svg" />
          </Icon>
          <Typography className={classes.heading}>
            {metadata["Address"]}
            {" | "}
            {dist}
            {"m away"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.expanded}>
          <Grid container spacing={1}>
            <Grid item xs={8} sm={4} className={classes.exist}>
              <MapLink metadata={metadata} />
            </Grid>
            <Grid item xs={12} sm={8} className={classes.exist}>
              <Typography className={classes.mobileFont}>
                Does this bin exist? {"     "}
                <Button
                  disabled={
                    yesNoButtons[metadata["id"]] !== null ? true : false
                  }
                  variant="contained"
                  style={{ backgroundColor: "rgb(143,251,142" }}
                  onClick={() => {
                    metadata["yes"] += 1;
                    const tmpArray = yesNoButtons.slice();
                    tmpArray[metadata["id"]] = 1;
                    setYesNoButtons(tmpArray);
                    yesNoAPICall(metadata);
                  }}
                >
                  Yes: {metadata["yes"]}
                </Button>
                {"  "}
                <Button
                  disabled={
                    yesNoButtons[metadata["id"]] !== null ? true : false
                  }
                  variant="contained"
                  style={{ backgroundColor: "rgb(251,167,142)" }}
                  onClick={() => {
                    metadata["no"] += 1;
                    const tmpArray = yesNoButtons.slice();
                    tmpArray[metadata["id"]] = 1;
                    setYesNoButtons(tmpArray);
                    yesNoAPICall(metadata);
                  }}
                >
                  No: {metadata["no"]}
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.mobileFont}>
                Cleanliness Rating:{" "}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Rating
                disabled={ratingsButton[metadata["id"]] !== null ? true : false}
                precision={0.1}
                value={metadata["ratings"]}
                onChange={(event, newValue) => {
                  const tmpArray = ratingsButton.slice();
                  tmpArray[metadata["id"]] = 1;
                  setRatingsButton(tmpArray);
                  metadata["ratings"] =
                    (metadata["ratings"] * metadata["num_ratings"] + newValue) /
                    (metadata["num_ratings"] + 1);
                  metadata["num_ratings"] = metadata["num_ratings"] + 1;
                  starAPICall(metadata);
                }}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <br></br>
    </div>
  );
};

export default BinCard;
