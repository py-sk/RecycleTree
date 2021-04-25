import React from "react";

const CoordinatesContext = React.createContext({
    coordinates: ["1", "1"],
    setCoordinates: () => {},
  });
export default CoordinatesContext;