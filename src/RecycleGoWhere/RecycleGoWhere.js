import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import BinsContext from "./Contexts/BinsContext"
import RadiusContext from "./Contexts/RadiusContext"
import CoordinatesContext from "./Contexts/CoordinatesContext"
import InfoPanel from "./Components/InfoPanel";
import RadiusSlider from "./Components/RadiusSlider";

const RecycleGoWhere = () => {
  const [bins, setBins] = useState(null);
  const binsValue = { bins, setBins };
  const [radius, setRadius] = useState(500);
  const radiusValue = { radius, setRadius };
  const [coordinates, setCoordinates] = useState(["1", "1"]);
  const coordinatesValue = { coordinates, setCoordinates };
  return (
    <CoordinatesContext.Provider value={coordinatesValue}>
    <RadiusContext.Provider value={radiusValue}>
      <BinsContext.Provider value={binsValue}>
        <SearchBar />
        <RadiusSlider />
        <InfoPanel />
      </BinsContext.Provider>
    </RadiusContext.Provider>
    </CoordinatesContext.Provider>
  );
};

export {RecycleGoWhere};