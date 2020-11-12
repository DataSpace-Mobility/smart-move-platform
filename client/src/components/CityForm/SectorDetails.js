import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Button,
  ButtonGroup,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";

const sectorList = [
  "Environment",
  "City Landuse",
  "Civil Aviation",
  "Electric Mobility",
  "Informal Transport",
  "Inland Water Services",
  "Metro Rail",
  "Non-motorized transport",
  "Parking",
  "Public Buses",
  "Railways",
  "Road Infrastructure",
  "Road Safety",
  "Shipping and Ports",
  "Demographics",
  "Traffic",
  "Urban Freight",
  "Others",
];
const subSectorList = {
  Environment: ["Air Quality", "Meteorology", "Others"],
  "City Landuse": [
    "Existing city level landuse map",
    "Proposed city level landuse map",
    "City boundaries and divisons",
    "Public WiFi services",
    "Others",
  ],
  "Civil Aviation": [
    "Civil Aviation Infrastructure and Traffic Patterns",
    "Others",
  ],
  "Electric Mobility": [
    "EV Charging infrastructure",
    "EV service centers",
    "E-rickshaw operations",
    "Others",
  ],
  "Informal Transport": [
    "Auto-rickshaws vehicle counts",
    "Auto-rickshaw operations",
    "Others",
  ],
  "Inland Water Services": ["Infrastructure and Traffic Patterns", "Others"],
  "Metro Rail": [
    "Metro operations",
    "Metro stations",
    "Public Transport Finance",
    "Others",
  ],
  "Non-motorized transport": [
    "Footpaths",
    "Cycle tracks",
    "Public Bike Sharing",
    "Others",
  ],
  Parking: [
    "Private vehicles parking infrastructure",
    "Illegal parking tickets",
    "Real-time Illegal Parking",
    "Auto-rickshaws parking infrastructure",
    "E-rickshaws parking infrastructure",
    "Public parking for other Intermediate/ informal modes of transport (minivans, minibuses, shared autorickshaws,etc.)",
    "Parking at railway stations",
    "Parking at metro stations",
    "Others",
  ],
  "Public Buses": [
    "Bus operations",
    "Bus stations, stops, terminals and depots",
    "Public Transport Finance",
    "Others",
  ],
  Railways: ["Railway stations", "Others"],
  "Road Infrastructure": [
    "Road network base map",
    "Street lights",
    "Potholes",
    "Proposed Transport projects",
    "Road and Infrastructure Finance",
    "Others",
  ],
  "Road Safety": ["Road traffic accidents", "Others"],
  "Shipping and Ports": ["Infrastructure and Traffic Patterns", "Others"],
  Demographics: [
    "Household income and expenditure",
    "Housing",
    "Education infrastructure",
    "Employment",
    "Population",
    "Public Distribution Schemes",
    "Literacy",
    "Others",
  ],
  Traffic: [
    "Traffic signals",
    "Traffic Speed",
    "Traffic density",
    "Traffic alerts",
    "Traffic condition",
    "Travel behavior",
    "Fuel Stations - Petrol, Diesel, CNG, etc.",
    "Anonymized registered vehicles",
    "Others",
  ],
  "Urban Freight": ["Freight Terminals", "Others"],
  Others: ["Others"],
};

const subSectorDescList = {
  "Air Quality":
    "Location of sensors, types of pollutants monitored, historical and real-time data on air quality",
  Meteorology:
    "Annual and Monthly variations in average Rainfall, average Temperature",
  "Existing city level landuse map": "Existing landuse assigned to city plots",
  "Proposed city level landuse map":
    "Proposed landuse assigned to city plots as per approved city masterplan",
  "City boundaries and divisons":
    "Geospatial data of municipal corporation boundary, ward boundaries, ABD area boundary, villages and towns within the urban agglomeration",
  "Public WiFi services":
    "Location, extent of coverage, speeds, service provider, fare structure, payment mechanisms",
  "Civil Aviation Infrastructure and Traffic Patterns":
    "Routes, operations schedules;\nHistorical and real-time data of GPS locations, passenger counts, fare structure, payment mechanisms;\nTotal fleet size, Fleet size in operation, Size/ Types of vehicles in operation; \nType of vehicles by fuel type, age;\nReal-time maintenance and breakdown alerts\nElectronic ticketing including: transaction date and time, mode of transport, depot, trip and route associated, vehicle, fare, mode of payment, ticket type, smart card information, etc.",
  "EV Charging infrastructure":
    "Location of fuel stations, number and specifications of guns, historical and real-time fare structure, operator details",
  "EV service centers":
    "Locations, types of vehicles permitted, booking details, operator details",
  "E-rickshaw operations":
    "Total number of vehicles, routes, operating hours, fare structure, payment mechanism\n\nparking locations, location of charging infrastructure",
  "Auto-rickshaws vehicle counts":
    "Number of registered vehicles, location of registration",
  "Auto-rickshaw operations":
    "Routes followed, auto-rickshaw stands, approximate passenger volumes, operating hours/ schedules, fare structure, payment mechanisms",
  "Infrastructure and Traffic Patterns":
    "Routes, operations schedules;\nHistorical and real-time data of bus GPS locations, passenger counts, fare structure, payment mechanisms;\nTotal fleet size, Fleet size in operation, Size/ Types of vehicles in operation; \nType of vehicles by fuel type, age;\nReal-time maintenance and breakdown alerts\nElectronic ticketing including: transaction date and time, mode of transport, depot, trip and route associated, vehicle, fare, mode of payment, ticket type, smart card information, etc.",
  "Metro operations":
    "Real-time arrivals and departures, passenger alighting and boarding counts, fare structure, fare collection, historical and real-time maintenance and breakdown alerts",
  "Metro stations":
    "Location and number of lines, platforms, number of levels\nLocation of ticket counters, help kiosks, security gates (to swipe travel cards/ tickets)\nLocation, height, width, slope of entry and exit points, location of staircases, lifts, elevators, other accessibility information for disabled persons\nPassenger facilities available - restrooms, lockers, etc.",
  "Public Transport Finance":
    "Cost per km cost as per contract, operational costs, crew costs,  subsidies received for operations, revenue from pass sale, total non-fare revenue",
  Footpaths: "Location, width, paving of existing and proposed footpaths",
  "Cycle tracks":
    "Location, width, paving of existing and proposed cycle tracks",
  "Public Bike Sharing":
    "Location of docking stations, number of bikes in operation;\nAnonymized origins and destinations of riders with timestamps",
  "Private vehicles parking infrastructure":
    "Location, types of vehicles permitted, number of parking spots per vehicle type, historical and real-time occupancy, details of parking facilities (roof overhead, disability access, etc.), fare structure, payment mechanisms, operational hours, operator details",
  "Illegal parking tickets": "Location of illegal parking tickets and fines",
  "Real-time Illegal Parking":
    "Location and identity of illegally parked vehicles (can be collected either by drone survey or manually)",
  "Auto-rickshaws parking infrastructure":
    "Location, number of parking spots, details of parking facilities (roof overhead, disability access, etc.), operational hours",
  "E-rickshaws parking infrastructure":
    "Location, number of parking spots, details of parking facilities (roof overhead, disability access, etc.), operational hours",
  "Public parking for other Intermediate/ informal modes of transport (minivans, minibuses, shared autorickshaws,etc.)":
    "Location, number of parking spots, details of parking facilities (roof overhead, disability access, etc.), operational hours",
  "Parking at railway stations":
    "Location and number of lines, platforms\nLocation, height, width, slope of entry and exit points, location of staircases, lifts, elevators, other accessibility information for disabled persons\nPassenger facilities available - restrooms, lockers, etc.",
  "Parking at metro stations":
    "Location, types of vehicles permitted, number of parking spots per vehicle type, historical and real-time occupancy, details of parking facilities (roof overhead, disability access, etc.), fare structure, payment mechanisms, operational hours, operator details",
  "Bus operations":
    "Bus routes, operations schedules;\nHistorical and real-time data of bus GPS locations, passenger counts, fare structure, payment mechanisms;\nTotal fleet size, Fleet size in operation, Size/ Types of buses in operation; \nType of buses by fuel type, age;\nReal-time maintenance and breakdown alerts\nElectronic ticketing including: transaction date and time, mode of transport, depot, trip and route associated, vehicle, fare, mode of payment, ticket type, smart card information, etc.",
  "Bus stations, stops, terminals and depots":
    "Location, overall capacity, number of platforms, number of bus bays, size/ type of buses permitted",
  "Public Transport Finance__1":
    "Cost per km cost as per contract, operational costs, crew costs,  subsidies received for operations, revenue from pass sale, total non-fare revenue",
  "Railway stations":
    "Location and number of lines, platforms\nLocation, height, width, slope of entry and exit points, accessibility for disabled persons\nPassenger facilities available - restrooms, lockers, etc.",
  "Road network base map":
    "Location of all existing city roads and road junctions with details of right of way, number of lanes, carriageway width, surface type, maximum speed, direction of traffic flow (one-way/ two-way);\nLocation of features - underpass, flyover, foot-overbridge, etc.",
  "Street lights":
    "Location, height of pole, lighting technology,number of lamps, wattage, power source, status of operation",
  Potholes: "Locations, timestamp of detection",
  "Proposed Transport projects":
    "Locations, type of infrastructure and details of proposals as per submitted DPRs, Master Plan, Comprehensive Development Plan, Comprehensive Mobility Plan (highways, flyovers, metro rail, etc.)",
  "Road and Infrastructure Finance":
    "Cost per km cost as per contract, operational costs, crew costs,  subsidies received , revenue from tolls",
  "Road traffic accidents":
    "Location, black-spots, timestamp, vehicles involved, cause of accident, fatalities and injuries by vehicle mode (historic data)",
  "Infrastructure and Traffic Patterns__1":
    "Routes, operations schedules;\nHistorical and real-time data of bus GPS locations, passenger counts, fare structure, payment mechanisms;\nTotal fleet size, Fleet size in operation, Size/ Types of vehicles in operation; \nType of vehicles by fuel type, age;\nReal-time maintenance and breakdown alerts\nElectronic ticketing including: transaction date and time, mode of transport, depot, trip and route associated, vehicle, fare, mode of payment, ticket type, smart card information, etc.",
  "Household income and expenditure":
    "Average Household Income, Average Household Expenditure, per capita income, per capita expenditure on various sectors - health, education, transport, food items, telecome, petroleum products, etc.",
  Housing: "Location of slums, resident population in each slum",
  "Education infrastructure":
    "Location of primary schools, secondary schools, higher secondary schools, colleges, research institutions, etc.",
  Employment:
    "Employment and Unemployment, Employment in organized sector, Ward-wise distribution of total workers, main workers, marginal workers, etc.",
  Population: "Ward-wise population distribution",
  "Public Distribution Schemes":
    "Ward-wise distribution of beneficiaries of Public Distribution Schemes",
  Literacy: "Ward-wise literacy rate and level of education",
  "Traffic signals":
    "Locations, real-time and historical signal phasing, length",
  "Traffic Speed":
    "Vehicle speeds as detected by on-street CCTV cameras or any other source",
  "Traffic density": "Vehicle density as detected by on-street CCTV cameras",
  "Traffic alerts":
    "Animal, dark spots, vehicle on-road alerts as detected by on-street CCTV cameras or any other source",
  "Traffic condition":
    "Data collected for Comprehensive Mobility Plan or any other survey- Classified Volume count (outer cordon, screen line and midblock), Turning Movement Count, Occupancy, Speed & Delay, pedestrian counts",
  "Travel behavior":
    "Anonymized data collected from Household surveys, Origin-Destination surveys, Stated preferences and willingness to shift, tourist survey, establishment survey, petrol pump survey; General user perception study",
  "Fuel Stations - Petrol, Diesel, CNG, etc.":
    "Location of fuel stations, types of fuel, number of guns, historical and real-time fare structure, operator details",
  "Anonymized registered vehicles":
    "type of vehicle registered, count of vehicles by type, fuel type, date of registration, location of registration",
  "Freight Terminals":
    "Location, parking capacity by vehicle type, types of goods transported, operating hours",
  Others: "Please check this if you are not sure about your dataset type",
};

const initialState = {
  "Air Quality": false,
  Meteorology: false,
  "Existing city level landuse map": false,
  "Proposed city level landuse map": false,
  "City boundaries and divisons": false,
  "Public WiFi services": false,
  "Civil Aviation Infrastructure and Traffic Patterns": false,
  "EV Charging infrastructure": false,
  "EV service centers": false,
  "E-rickshaw operations": false,
  "Auto-rickshaws vehicle counts": false,
  "Auto-rickshaw operations": false,
  "Infrastructure and Traffic Patterns": false,
  "Metro operations": false,
  "Metro stations": false,
  "Public Transport Finance": false,
  Footpaths: false,
  "Cycle tracks": false,
  "Public Bike Sharing": false,
  "Private vehicles parking infrastructure": false,
  "Illegal parking tickets": false,
  "Real-time Illegal Parking": false,
  "Auto-rickshaws parking infrastructure": false,
  "E-rickshaws parking infrastructure": false,
  "Public parking for other Intermediate/ informal modes of transport (minivans, minibuses, shared autorickshaws,etc.)": false,
  "Parking at railway stations": false,
  "Parking at metro stations": false,
  "Bus operations": false,
  "Bus stations, stops, terminals and depots": false,
  "Public Transport Finance": false,
  "Railway stations": false,
  "Road network base map": false,
  "Street lights": false,
  Potholes: false,
  "Proposed Transport projects": false,
  "Road and Infrastructure Finance": false,
  "Road traffic accidents": false,
  "Infrastructure and Traffic Patterns": false,
  "Household income and expenditure": false,
  Housing: false,
  "Education infrastructure": false,
  Employment: false,
  Population: false,
  "Public Distribution Schemes": false,
  Literacy: false,
  "Traffic signals": false,
  "Traffic Speed": false,
  "Traffic density": false,
  "Traffic alerts": false,
  "Traffic condition": false,
  "Travel behavior": false,
  "Fuel Stations - Petrol, Diesel, CNG, etc.": false,
  "Anonymized registered vehicles": false,
  "Freight Terminals": false,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginTop: "2vh",
    height: "100%",
    color: "#3e3e3f",
  },
  root1: {
    margin: "2vh",
    flexGrow: 1,
  },
  card: {
    border: "1px solid gray",
    padding: "5px",
    margin: "5px",
  },
  head: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "24px",
    marginBottom: "5px",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button :{
    width: "100%",
    padding:" 10px",
    borderRadius:" 5px",
    cursor:" pointer",
  },  
  buttonSelected :{
    width:" 100%",
    padding:" 10px",
    borderRadius:" 5px",
    backgroundColor:" #6c6d6f",
    color:" white",
    cursor:" pointer",
  }
}));

const SectorDetails = (props) => {
  const [cityData, setCityData] = useState({});
  const [sector, setSector] = useState("");
  const [state, setState] = useState(initialState);
  const classes = useStyles();
  // const { personData } = props.location;
  const handleCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSectors = () => {
    const keys = Object.keys(state).filter((k) => state[k]);
    setCityData({ ...cityData, [sector]: keys });
    setState(initialState);
    handleClose();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDialog = (event) => {
    // Set Sector
    // console.log(event.target.value);
    setSector(event.target.value);
    handleClickOpen();
  };

  const handleNext = () => {
    if (!Object.keys(cityData).length) {
      alert("Please select atleast one dataset");
    } else {
      props.next({ datasets: cityData });
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        City Data Availability
      </Typography>
      <Grid container spacing={3}>
        {sectorList.map((sector, id) => (
          <Grid key={id} item xs={12} md={4}>
            <div>
              <button
                onClick={handleDialog}
                className={
                  cityData[sector]?.length ? classes.buttonSelected : classes.button
                }
                value={sector}
              >
                {sector}
              </button>
            </div>
          </Grid>
        ))}
        <Grid item xs={12} className={classes.buttons}>
          <ButtonGroup>
            <Button onClick={props.back}>Back</Button>
            <Button variant="contained" color="primary" onClick={handleNext} style={{ backgroundColor: "#69BFC3"}}>
              Next
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Data on {sector}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you have any of the following datasets in our city?<br></br>
            Some example data points are listed below each category for your
            reference.
          </DialogContentText>
          {sector
            ? subSectorList[sector].map((subSector, id) => (
                <Card className={classes.card} key={id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.sector}
                        onChange={handleCheck}
                        name={subSector}
                        color="primary"
                      />
                    }
                    label={subSector}
                  />
                  <p>{subSectorDescList[subSector]}</p>
                </Card>
              ))
            : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSectors} variant="contained" style={{ backgroundColor: "#DC4351", color:"#fff"}}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default SectorDetails;
