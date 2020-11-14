import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonDetails from "./PersonDetails";
import SectorDetails from "./SectorDetails";
import Review from "./Review";
import { useHistory } from "react-router-dom";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Majestea Marketing
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    "& > .MuiStepIcon-root.MuiStepIcon-active": {
      color: "red",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: "#69BFC3",
    color: "black",
  },
  yellowColor: {
    color: "#F4C75B",
    fontWeight: "500",
  },
}));

const steps = ["Contact Details", "Data Availability", "Review your entry"];
const initialCityData = {
  personData: null,
  datasets: null,
};

const CityForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [cityData, setCityData] = React.useState(initialCityData);
  const [showNextPage, setShowNextPage] = React.useState(false);
  const history = useHistory();

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonDetails next={saveData} back={handleBack} />;
      case 1:
        return (
          <SectorDetails
            showNext={showNextPage}
            next={saveData}
            back={handleBack}
          />
        );
      case 2:
        return <Review data={cityData} submit={submitData} back={handleBack} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const saveData = (childData) => {
    setCityData({ ...cityData, ...childData });
    // console.log(childData);
    if (childData.personData) {
      const type = childData.personData.OrganizationType;
      if (type === "Smart City / SPV" || type === "Municipal Corporation") {
        setShowNextPage(true);
        // console.log("Organization type true", childData.personData.OrganizationType);
      } else {
        setShowNextPage(false);
        // console.log("Organization type false", childData.personData.OrganizationType);
      }
    }
    handleNext();
  };

  // useEffect(() => {
  //   console.log('useEffect called');
  // }, [cityData])

  // const handleNextPage = () => {
  //   if (cityData.personData) {
  //     const type = cityData.personData.OrganizationType;
  //     if (type === "Smart City / SPV" || type === "Municipal Corporation") {
  //       setShowNextPage(true);
  //       console.log("Organization type true", cityData.personData.OrganizationType);
  //     } else {
  //       setShowNextPage(false);
  //       console.log("Organization type false", cityData.personData.OrganizationType);
  //     }
  //   }
  // };

  const submitData = () => {
    handleNext();
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleUpload = () => {
    alert("Thank You, Data has been uploaded");
    history.push("/");
  };
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Smart MOVE : Innovative Urban Mobility Data Challenge
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            className={classes.yellowColor}
          >
            Become a Data Partner
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label} className={classes.yellowColor}>
                <StepLabel className={classes.yellowColor}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank You for becoming a city partner
                </Typography>
                <Typography variant="subtitle1">
                  We have received your entry. Please share your data with us
                  through our secure data sharing platform linked below.
                </Typography>
                <Typography variant="subtitle1">
                  For instructions on how to upload data and your login
                  password, please check your registered email.
                </Typography>
                <div
                  className={classes.buttons}
                  style={{ justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpload}
                    className={classes.button}
                  >
                    Upload data on a secure platform
                  </Button>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                {/* <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </div> */}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/* <Copyright /> */}
      </main>
    </React.Fragment>
  );
};
export default CityForm;
