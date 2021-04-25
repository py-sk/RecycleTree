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

export default function Clothes() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Typography className={classes.AccordionText}>
          In 2019, Singapore generated more than{" "}
          <Link target="_blank" href="https://www.nea.gov.sg/our-services/waste-management/waste-statistics-and-overall-recycling">
            168,000 tonnes of textile and leather waste
          </Link>
          , but only 4% of it was recycled. So, how can you responsibly dispose
          your unwanted clothes without contributing to this waste? Here are a
          few ways to do so: <Link href=""></Link>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          ✅ Swapping, Upcycling and Tailoring{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.AccordionText}>
          Join{" "}
          <Link target="_blank" href="https://www.thefashionpulpit.com/">
            The Fashion Pulpit
          </Link>
          , a space for those who value style and sustainability. You can either
          swap your clothes, purchase pre-loved clothes, or make use of their
          upcycling and tailoring services.{" "}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          ✅ Collection of Recycled Clothes from Home{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.AccordionText}>
          <Link target="_blank" href="https://www.greensquare.com.sg/">Greensquare</Link> helps
          to provide convenience by collecting clean clothes, wearable paired
          shoes, household linen, accessories (eg. belts and bags) from your
          house. You can also drop them off at these{" "}
          <Link target="_blank" href="https://www.greensquare.com.sg/dropoff">locations</Link>{" "}
          islandwide.{" "}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">✅ Clothes Recycling Bins </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.AccordionText}>
          You can drop off clothes (any brand, any fabric) to be recycled in the
          bins at HM. Plus, you’ll get a discount on your next purchase.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          ✅ Buying or Selling Pre-loved Items{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.AccordionText}>
          Visit a{" "}
          <Link target="_blank" href="https://www.refash.sg/start_selling">REFASH store</Link> ,
          which allows you to buy and sell secondhand fashion conveniently. You
          can list your items for free and REFASH will take a 19% handling fee.{" "}
          <Link target="_blank" href="https://styletribute.com/">StyleTribute</Link> offers
          authentic women’s luxury fashion brands such as Chanel, Céline,
          Hermes, Louis Vuitton, and many more at up to 90% off original retail
          price. Opt for DIY upload to keep 80% of the sale price or
          ‘white-glove’ for hassle-free service to keep 70-75% of the sale price
        </Typography>
      </Grid>
    </Grid>
  );
}
