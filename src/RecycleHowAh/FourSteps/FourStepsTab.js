import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepLabel: {
    fontSize: "larger",
    fontWeight: "900"
  },
}));

function getSteps() {
  return [
    "Is it contaminated with food/drink?",
    "Is it made up of more than one material? ",
    "Does it contain hazardous waste? ",
    "Is it a disposable item?",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Before throwing your recyclables into the recycling bins, remember to rinse and dry them! If they are contaminated with oil stains, food residues, or anything else, not only does it make them non-recyclable, but it will cross-contaminate everything near it. A staggering 40% of items are contaminated in Singapore, and you surely do not want your recycling efforts to go to waste because of one contaminated bottle. ";
    case 1:
      return "Certain objects made up of more than one material, such as coffee cups made of paper with a thin layer of plastic coating on the inside, cannot be recycled unless the materials are separated, which required a special machine. Either make sure that the item you are recycling is made up of all materials that are recyclable, or make sure it is only made up of one (recyclable) material.  ";
    case 2:
      return `Hazardous waste has substantial or potential threats to public health and the environment. So make sure the item you are disposing are free of such waste, such as clinical waste, paint, flammable substances, etc.   `;
    case 3:
      return `Disposable items are usually made up of materials which are not recyclable. Even if the disposable is made up of biodegradable material, it is not clear that it can be recycled like other normal recyclables. `;
    default:
      return "Unknown step";
  }
}

export default function FourSteps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "No"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>
            If you answered NO to all of the questions above, the item can be
            recycled!
          </Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
