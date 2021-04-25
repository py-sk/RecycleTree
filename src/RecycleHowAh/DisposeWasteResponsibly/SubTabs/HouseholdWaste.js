import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  AccordionText: {
    textAlign: "justify",
  },
}));

export default function HouseholdWaste() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Typography className={classes.AccordionText}>
          You can throw general household waste like paper, plastic, cans,
          bottles, magazines into the blue recycling bin, but make sure it is
          clean and free of contamination first! However, if you want to make
          sure your efforts won’t be undone by contamination, bring your
          recyclables to a{" "}
          <Link target="_blank" href="https://www.tzuchi.org.sg/en/our-missions/environmental-protection/eco-points/">
            Tzu Chi Foundation
          </Link>{" "}
          eco point instead.
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.AccordionText}>
          Besides that, although stationery cannot be thrown into the blue
          recycling bins, you can recycle your pens at any one of the{" "}
          <Link target="_blank" href="https://www.savethatpen.org/bin-locations-1">
            pen bin locations
          </Link>{" "}
          run by <Link target="_blank" href="https://www.savethatpen.org">Save That Pen</Link>.
          Refillable pens will be given a second lease of life and donated to
          less privileged students in Singapore. While pens that are deemed
          unusable are stripped of their plastic and metal to be recycled.
        </Typography>
      </Grid>
    </Grid>
  );
}
