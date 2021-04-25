import React from "react";

const YesNoContext = React.createContext({
    yesNoButtons: Array(10).fill(null),
    setYesNoButtons: () => {},
  });
export default YesNoContext;