import React from "react";

const RatingsContext = React.createContext({
    ratingsButton: Array(10).fill(null),
    setRatingsButton: () => {}
  });
export default RatingsContext;