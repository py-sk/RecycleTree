import React, { useContext } from "react";
import { Typography, Slider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import BinsContext from "../Contexts/BinsContext";
import RadiusContext from "../Contexts/RadiusContext";
import CoordinatesContext from "../Contexts/CoordinatesContext";

const useStyles = makeStyles((theme) => ({
  slider: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "25%",
    },
    color: "rgba(112, 175, 133, 1)",
  },
}));
function valuetext(value) {
  return `${value}`;
}
const RadiusSlider = () => {
  const classes = useStyles();
  const {coordinates, setCoordinates} = useContext(CoordinatesContext)
  const {bins, setBins} = useContext(BinsContext)
  const {radius, setRadius} = useContext(RadiusContext)
  function radiusAPICall(coordinates, value = -1) {
    var rad = radius;
    if (value !== -1) {
      rad = value;
    }
    axios
      .post("https://recycletree.herokuapp.com/radius", {
        radius: rad,
        lat: coordinates[0],
        lon: coordinates[1],
      })
      .then((res) => {
        setBins(res.data.bins);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Slider
        className={classes.slider}
        defaultValue={500}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={100}
        marks
        min={100}
        max={1000}
        color="#c6ebc9"
        onChangeCommitted={(event, value) => {
          setRadius(value);
          radiusAPICall([coordinates.lat, coordinates.lng], value);
        }}
      />
      <Typography>Radius of Search</Typography>
    </div>
  );
};
export default RadiusSlider;
