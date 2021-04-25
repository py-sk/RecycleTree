import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HouseholdWaste from "./SubTabs/HouseholdWaste";
import Food from "./SubTabs/Food";
import Clothes from "./SubTabs/Clothes";
import ElectronicWaste from "./SubTabs/ElectronicWaste";
import Furniture from "./SubTabs/Furniture";
import Lighting from "./SubTabs/LightingWaste";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    margin: "auto",
  },
  AccordionSummary: {
    margin: "auto",
    backgroundColor: "#c6ebc9",
  },
}));

export default function Accordion2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.AccordionSummary}
        >
          <Typography className={classes.heading}>
            General Household Waste{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <HouseholdWaste />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.AccordionSummary}
        >
          <Typography className={classes.heading}>Food</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Food />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          className={classes.AccordionSummary}
        >
          <Typography className={classes.heading}>Clothes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Clothes />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          className={classes.AccordionSummary}
        >
          <Typography className={classes.heading}>Electronic Waste</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ElectronicWaste />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          className={classes.AccordionSummary}
        >
          <Typography className={classes.heading}>Furniture</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Furniture />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          className={classes.AccordionSummary}
        >
          <Typography className={classes.heading}>Lighting Waste</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Lighting />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
