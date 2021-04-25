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

export default function Furniture() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={classes.AccordionText}>
          Pass on your unwanted furniture through{" "}
          <Link target="_blank" href="https://www.passiton.org.sg/about-us">Pass It On </Link>,
          a community project that provides a meaningful way for you to
          distribute unwanted furniture to those who need them most.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.AccordionText}>
          Check out{" "}
          <Link target="_blank" href="https://www.facebook.com/freevonation/">Freevo</Link>{" "}
          Nation, a perfect platform for anyone looking to reuse, recycle,
          upcycle or pass on their home items for free. To date, over 4,500
          pieces of furniture have been given away via this platform.
        </Typography>
      </Grid>
    </Grid>
  );
}
