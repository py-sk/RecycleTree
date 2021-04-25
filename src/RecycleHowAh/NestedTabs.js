import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { withStyles } from "@material-ui/core/styles";
import WhatIsRecyclableTab from "./WhatIsRecyclable/WhatIsRecyclableTab";
import Accordion2 from "./DisposeWasteResponsibly/DisposeWasteResponsiblyTab";
import Accordion3 from "./FourSteps/FourStepsTab";
import LineGraph from "./RecycleStats/LineGraph";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
    margin: "auto",
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    margin: "auto",
  },
  accordionTitle: {
    margin: "auto",
  },
  accordion: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "80%",
    },
  },
  flipcard: {
    margin: "auto",
  },
  card: {
    maxWidth: "100%",
  },
  cardTitle: {
    background: "#00000000",
  },
  cardContent: {
    margin: "10px",
  },
  firstAccordion: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(-2),
    },
  },
  graph:{
    [theme.breakpoints.up("md")]: {
      width: 500,
    },
    [theme.breakpoints.up("xs")]: {
      width: 500,
    },
    margin: "auto",
  }
}));

export default function NestedTabs() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.accordion}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className={classes.accordionTitle}>
            What is Recyclable?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.firstAccordion}>
          <WhatIsRecyclableTab />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={classes.accordion}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className={classes.accordionTitle}>
            Dispose Waste Responsibly{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion2 />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className={classes.accordion}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={classes.accordionTitle}>
            4 Steps to Determine Whether Item is Recyclable
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion3 />
        </AccordionDetails>
      </Accordion>
      <Accordion
        
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className={classes.accordion}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography className={classes.accordionTitle}>
            Recycling Statistics in Singapore{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.graph}><LineGraph /></div>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
