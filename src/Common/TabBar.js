import React from "react";
import { AppBar, Tabs, Tab, Typography, Box, Avatar } from "@material-ui/core";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import UploadBar from "../RecycleCanMeh/UploadBar";
import NestedTabs from "../RecycleHowAh/NestedTabs";
import TitleCardTemplate from "./TitleCardFactory";
import { RecycleGoWhere } from "../RecycleGoWhere/RecycleGoWhere";

// Boilerplate code from MUI
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// Custom Styles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(static/background.jpg)",
    width: "100%",
  },
  individualTabs: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
  appBar: {
    color: "#f5f5f561",
  },
}));

// MainTabs Component
export default function MainTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            icon={<Avatar src="static/pillarLogos/goWhereLogo.png" className={classes.individualTabs} />}
            label="Recycle Go Where"
            {...a11yProps(0)}
          />
          <Tab
            icon={
              <Avatar src="static/pillarLogos/canMehLogo.png" className={classes.individualTabs} />
            }
            label="Recycle Can Meh"
            {...a11yProps(1)}
          />
          <Tab
            icon={
              <Avatar src="static/pillarLogos/howAhLogo.png" className={classes.individualTabs} />
            }
            label="Recycle How Ah"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TitleCardTemplate
            name="Recycle Go Where"
            source="static/GoWhereMascot.svg"
          />
          <RecycleGoWhere />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TitleCardTemplate
            name="Recycle Can Meh"
            source="static/CanMehMascot.svg"
          />
          <UploadBar />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TitleCardTemplate
            name="Recycle How Ah"
            source="static/HowAhMascot.svg"
          />
          <NestedTabs />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
