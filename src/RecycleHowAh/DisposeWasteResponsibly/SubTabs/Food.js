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

export default function Food() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Typography className={classes.AccordionText}>
          Composting is one of the easiest ways and fun ways to dispose of food
          waste. You can get started with the{" "}
          <Link target="_blank" href="http://www.zerowastesg.com/2009/02/04/start-composting-at-home/">
            composting guide
          </Link>{" "}
          from Zero Waste SG, or check out The Smart Local’s{" "}
          <Link target="_blank" href="https://thesmartlocal.com/read/composting-in-singapore/">
            beginners guide
          </Link>
          . There are also Facebook pages and groups such as{" "}
          <Link target="_blank" href="https://www.facebook.com/compostinginsingapore/">
            Composting in Singapore
          </Link>{" "}
          and{" "}
          <Link target="_blank" href="https://www.facebook.com/groups/vermicompostsg/">
            Vermicomposting
          </Link>{" "}
          (Worm composting).
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.AccordionText}>
          You can download the free food-sharing app,{" "}
          <Link target="_blank" href="https://olioex.com/">Olio</Link>, where you can share the
          excess food with your neighbours, while benefitting from taking the
          food that other people are getting rid of, playing a part to reduce
          the amount of food waste in our community.
        </Typography>
      </Grid>
    </Grid>
  );
}
