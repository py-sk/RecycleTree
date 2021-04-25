import React, { useContext, useState } from "react";
import { IconButton, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MyLocationIcon from "@material-ui/icons/MyLocation";

import MUIPlacesAutocomplete, {
  geocodeBySuggestion,
} from "mui-places-autocomplete";
import axios from "axios";
import BinsContext from "../Contexts/BinsContext";
import RadiusContext from "../Contexts/RadiusContext";
import CoordinatesContext from "../Contexts/CoordinatesContext";
const useStyles = makeStyles((theme) => ({
  paperSearchBar: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "25%",
    },
    borderRadius: "50px",
    border: "3px solid rgba(19, 123, 19, 1)",
    margin: "auto",
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  autoComp: {
    width: "100%",
    paddingLeft: theme.spacing(2),
    marginTop: "5px",
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const { coordinates, setCoordinates } = useContext(CoordinatesContext);
  const { bins, setBins } = useContext(BinsContext);
  const { radius, setRadius } = useContext(RadiusContext);
  const [searchBarPlaceHolder, setSearchBarPlaceHolder] = useState("");
  function createAutocompleteRequest(inputValue) {
    return {
      input: inputValue,
      location: { lat: () => 1.352083, lng: () => 103.819839 },
      radius: 26000,
    };
  }

  const onSuggestionSelected = (suggestion) => {
    geocodeBySuggestion(suggestion).then((results) => {
      if (results.length < 1) {
        this.setState({
          open: true,
          errorMessage:
            "Geocode request completed successfully but without any results",
        });
        return;
      }
      const { geometry } = results[0];
      setCoordinates({
        lat: geometry.location.lat(),
        lng: geometry.location.lng(),
      });
      var coordinates = [geometry.location.lat(), geometry.location.lng()];
      radiusAPICall(coordinates);
    });
  };

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
      <Paper
        component="form"
        className={classes.paperSearchBar}
        variant="outlined"
      >
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <div style={{ position: "relative" }}>
              <MUIPlacesAutocomplete
                textFieldProps={{
                  className: classes.autoComp,
                  placeholder: searchBarPlaceHolder,
                }}
                onSuggestionSelected={onSuggestionSelected}
                renderTarget={() => <div />}
                createAutocompleteRequest={createAutocompleteRequest}
              />
            </div>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              className={classes.iconButton}
              aria-label="search"
              onClick={() => {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    radiusAPICall([
                      position.coords.latitude,
                      position.coords.longitude,
                    ]);
                    setSearchBarPlaceHolder("Current Location");
                    setCoordinates({
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                    });
                  },
                  () => null
                );
              }}
            >
              <MyLocationIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default SearchBar;
