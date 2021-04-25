import React from "react";

const BinsContext = React.createContext({
    bins: null,
    setBins: () => {},
  });
export default BinsContext;
