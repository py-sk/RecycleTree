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

export default function ElectronicWaste() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography className={classes.AccordionText}>
          Before throwing your old handphone, laptop, or electronic device,
          consider selling it at your nearest{" "}
          <Link target="_blank" href="http://www.sgmobile.sg/">resellers</Link> if it is still
          usable. Alternatively,{" "}
          <Link target="_blank" href="https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/where-to-recycle-e-waste">
            locate your nearest e-waste collector
          </Link>{" "}
          and drop it in. For most electronic appliances:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          ✅ Download <Link target="_blank" href="https://greenravolution.com/">Gravo</Link> and
          arrange a home pick-up.{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          ✅ Starhub’s RENEW Programme –{" "}
          <Link target="_blank" href="http://www.starhub.com/about-us/corporate-sustainability/recycling-nations-electronic-waste.html">
            over 300 bin locations
          </Link>{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          ✅ Singtel x SingPost’s E-Waste Recycling Programme –{" "}
          <Link target="_blank" href="http://recycle.sg/">over 15 locations</Link>{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          ✅ M1 E-Waste Drop-off Point Programme –{" "}
          <Link target="_blank" href="https://www.nea.gov.sg/docs/default-source/default-document-library/m1-e-waste-drop-off-point-programme----bin-locations.pdf">
            7 locations
          </Link>{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          ✅ City Square Mall E-Waste Recycling Programme –{" "}
          <Link target="_blank" href="https://www.citysquaremall.com.sg/happenings/events-promotions/e-waste-recycling-programme/">
            1 location
          </Link>{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          ✅ Heartland E-Waste Recycling Programme – Collection points are at{" "}
          <Link target="_blank" href="http://www.nea.gov.sg/docs/default-source/energy-waste/recycling/e-waste/HERP.pdf">
            RCs, CCs and NCs around the South East CDC
          </Link>{" "}
          on the first Saturdays of the month between 9.30 am to 1.30 pm{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          For Ink and toner cartridge:{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          ✅{" "}
          <Link target="_blank" href="https://corporate.delltechnologies.com/en-sg/social-impact/advancing-sustainability/how-to-recycle.htm#/cdt/home">
            Dell
          </Link>{" "}
          or{" "}
          <Link target="_blank" href="https://h20195.www2.hp.com/v2/GetDocument.aspx?docname=c06649816">
            HP
          </Link>{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          ✅ Project Homecoming –{" "}
          <Link target="_blank" href="http://www.zerowastesg.com/2011/12/08/singapore-printer-brands-launch-first-ever-joint-recycling-initiative-%E2%80%93-project-homecoming-press-releases/#more-1591">
            located at 21 public libraries
          </Link>{" "}
        </Typography>
      </Grid>
    </Grid>
  );
}
