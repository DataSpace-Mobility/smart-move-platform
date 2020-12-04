import React from "react";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonDetails from "./PersonDetails";
import SectorDetails from "./SectorDetails";
import Review from "./Review";
import axios from "axios";

const theme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        color: "#5C5C5C",
        "&$completed": {
          color: "#1C1C1C",
        },
        "&$active": {
          color: "#1C1C1C",
        },
      },
      active: {},
      completed: {},
    },
  },
});

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
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: "#69BFC3",
    color: "black",
    "&:hover":{
      backgroundColor: "#4AB9BE",
    }
  },
  redColor: {
    color: "#DC4351",
    fontWeight: "500",
  },
}));

const steps = ["Contact Details", "Data Availability", "Review your entry"];
const initialCityData = {
  id: null,
  personData: null,
  datasets: null,
};

const CityForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [cityData, setCityData] = React.useState(initialCityData);
  const [userId, setUserId] = React.useState(null);
  const [showNextPage, setShowNextPage] = React.useState(false);
  const [doc, setDoc] = React.useState("");

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonDetails next={saveData} back={handleBack} />;
      case 1:
        return (
          <SectorDetails
            userId={userId}
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

  const saveData = (childData, id) => {
    setCityData({ ...cityData, ...childData });
    if (id) {
      setUserId(id);
    }
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

  const submitData = (docString) => {
    setDoc(docString);
    handleNext();
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleUpload = () => {
    // console.log(cityData.personData);
    const { Email, Poc } = cityData.personData;
    // console.log(Email, Poc);
    // const Poc="Rishabh Sisodiya";
    // const Email="rishabh.sisodiya4@gmail.com"
    const url = "/api/users/registerEmail";
    axios
      .post(url, { Poc, Email, doc })
      .then((res) => {
        // console.log(res.status);
        // console.log(res.data.message);
        const msg= res.data.message;
        if (msg==="User Created") {
          window.open('https://storage.dataspace.mobi')
        }else{
          // setErrorMsg(JSON.stringify(msg));
          throw new Error(JSON.stringify(msg));
        }
        
      })
      .catch((err) => {
        // setErrorMsg(err)
        console.log(err);
      });
      
    // history.push("/");
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            className={classes.redColor}
          >
            Become a Data Partner
          </Typography>
          <MuiThemeProvider theme={theme}>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </MuiThemeProvider>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank You for becoming a city partner
                </Typography>
                {/* <Typography variant="subtitle1">
                  Please click the button below to
                  complete your entry. You will be redirected to secure data
                  storage portal, where you can share your data.
                </Typography> */}
                <Typography variant="subtitle1">
                  We will be sending you an email with the instructions on how to upload data along with your login
                  credentials.
                </Typography>
                {/* <div
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
                </div> */}
              </React.Fragment>
            ) : (
              <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
};
export default CityForm;
