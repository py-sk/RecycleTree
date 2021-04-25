import React from "react";
import Grid from "@material-ui/core/Grid";
import MaterialFlipCard from "./FlipCardFactory";

export default function WhatIsRecyclableTab() {
  return (
    <Grid container spacing={1} justify="space-around" alignItems="center">
      <Grid item xs={12} sm={4} xl={2}>
        <MaterialFlipCard material="paper" />
      </Grid>
      <Grid item xs={12} sm={4} xl={2}>
        <MaterialFlipCard material="plastic" />
      </Grid>
      <Grid item xs={12} sm={4} xl={2}>
        <MaterialFlipCard material="glass" />
      </Grid>
      <Grid item xs={12} sm={4} xl={2}>
        <MaterialFlipCard material="metal" />
      </Grid>
      <Grid item xs={12} sm={4} xl={2}>
        <MaterialFlipCard material="others" />
      </Grid>
    </Grid>
  );
}
