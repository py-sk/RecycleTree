import React from "react";
import { Typography, Paper, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

var material_num_name_dict = {
  1: "Metal",
  2: "Glass",
  3: "Paper",
  4: "Plastic",
  5: "Others",
};
var material_item_num_dict = {
  metal: 1,
  glass: 2,
  paper: 3,
  plastic: 4,
  others: 5,
};

var plastic_item_num_dict = {
  cd: 1,
  drinking_straw: 2,
  plastic_bag: 3,
  plastic_clothes_hanger: 4,
  plastic_container_or_bottle: 5,
  plastic_disposable: 6,
  plastic_packaging: 7,
  plastic_packaging_with_foil: 8,
  styrofoam: 9,
};

var plastic_num_name_dict = {
  1: "CD Disk",
  2: "Straw",
  3: "Plastic Bag",
  4: "Clothes Hanger",
  5: "Plastic Container or Bottle",
  6: "Disposable Cutlery",
  7: "Plastic Packaging",
  8: "Plastic Packaging With Foil",
  9: "Styrofoam",
};

var glass_item_num_dict = {
  ceramic: 1,
  glassware: 2,
  lightbulb: 3,
};
var glass_num_name_dict = {
  1: "Ceramic",
  2: "Glassware",
  3: "Lightbulb",
};

var metal_item_num_dict = {
  aerosol_can: 1,
  aluminum_tray_foil: 2,
  metal_can_or_container: 3,
};
var metal_num_name_dict = {
  1: "Aerosol Can",
  2: "Aluminium Foil or Tray",
  3: "Metal Can or Container",
};

var others_item_num_dict = {
  battery: 1,
  electronic_waste: 2,
  stationery: 3,
};
var others_num_name_dict = {
  1: "Battery",
  2: "Electronic Waste",
  3: "Stationery",
};

var paper_item_num_dict = {
  beverage_carton: 1,
  cardboard: 2,
  chopsticks: 3,
  disposables: 4,
  paper_bag: 5,
  paper_packaging: 6,
  paper_product: 7,
  paper_receipt: 8,
  paper_roll: 9,
  paper_sheet: 10,
  tissue_box: 11,
  tissue_paper: 12,
};
var paper_num_name_dict = {
  1: "Beverage Carton",
  2: "Cardboard",
  3: "Chopsticks",
  4: "Disposables",
  5: "Paper Bag",
  6: "Paper Packaging",
  7: "Paper Product",
  8: "Receipt",
  9: "Paper Roll",
  10: "Paper Sheet",
  11: "Tissue Box",
  12: "Tissue Paper",
};
const useStyles = makeStyles((theme) => ({
  accordion: {
    width: "95%",
    margin: "auto !important",
    backgroundColor: "rgba(112, 175, 133, 0.67)",
    borderRadius: "10px !important",
  },
  expanded: {
    margin: "auto !important",
    borderRadius: "10px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  heading2: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
    color: "#215125",
  },
  accordionSummary: {
    backgroundColor: "#c6ebc9",
    borderRadius: "10px",
  },
  infoPaper: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "35%",
    },
    maxWidth: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    marginTop: theme.spacing(8),
    borderRadius: 25,
  },
  centralIcon: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "auto",
  },
  centralIconContainer: {
    marginTop: theme.spacing(-7),
  },
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  linkIcon: {
    color: "#24982e",
  },
  imageIcon: {
    height: "inherit",
    width: "inherit",
  },
  iconRoot: {
    textAlign: "center",
  },
  mapsLink: {
    marginTop: theme.spacing(1),
    color: "#0d6894",
  },
  exist: {
    margin: "auto",
  },
  preview: {
    maxWidth: "80%",
    marginTop: theme.spacing(1),
  },
}));

const ResultsPanel = ({
  mat,
  metal,
  paper,
  plastic,
  others,
  glass,
  preview,
}) => {
  const classes = useStyles();
  if (mat) {
    var mat_proper = material_num_name_dict[material_item_num_dict[mat]];
    if (mat_proper === "Metal") {
      var item_proper = metal_num_name_dict[metal_item_num_dict[metal]];
    } else if (mat_proper === "Paper") {
      var item_proper = paper_num_name_dict[paper_item_num_dict[paper]];
    } else if (mat_proper === "Plastic") {
      var item_proper = plastic_num_name_dict[plastic_item_num_dict[plastic]];
    } else if (mat_proper === "Others") {
      var item_proper = others_num_name_dict[others_item_num_dict[others]];
    } else if (mat_proper === "Glass") {
      var item_proper = glass_num_name_dict[glass_item_num_dict[glass]];
    }
    return (
      <div>
        <Paper elevation={3} variant="outlined" className={classes.infoPaper}>
          <div className={classes.centralIconContainer}>
            <Avatar src="static/pillarLogos/canMehLogo.png" className={classes.centralIcon} />
          </div>
          <img src={preview} className={classes.preview} />
          <Typography className={classes.heading2}>
            Material: {mat_proper}
          </Typography>
          <Typography className={classes.heading2}>
            Item: {item_proper}
          </Typography>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.wrapIcon}>
                    <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor sed do eiusmod temporsed do eiusmod
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="subtitle1" className={classes.wrapIcon}>
                    <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor sed do eiusmod temporsed do eiusmod
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="subtitle1" className={classes.wrapIcon}>
                    <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor sed do eiusmod temporsed do eiusmod
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  } else {
    return (
      <div>
        <Paper elevation={3} variant="outlined" className={classes.infoPaper}>
          <div className={classes.centralIconContainer}>
            <Avatar src="static/pillarLogos/canMehLogo.png" className={classes.centralIcon} />
          </div>
          <Typography className={classes.heading2}>
            Upload An Image of Your Waste Above!
          </Typography>
          <img src={preview} className={classes.preview} />
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.wrapIcon}>
                    <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor sed do eiusmod temporsed do eiusmod
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="subtitle1" className={classes.wrapIcon}>
                    <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor sed do eiusmod temporsed do eiusmod
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="subtitle1" className={classes.wrapIcon}>
                    <CheckCircleOutlineIcon className={classes.linkIcon} />{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor sed do eiusmod temporsed do eiusmod
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
};
export default ResultsPanel;
