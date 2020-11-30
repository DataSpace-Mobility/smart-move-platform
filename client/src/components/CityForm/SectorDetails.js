import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Button,
  ButtonGroup,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import CityLanduse from "./button Icons/Black/city_landuse.svg";
import CivialAviation from "./button Icons/Black/civial_aviation.svg";
import Demographics from "./button Icons/Black/demographics.svg";
import ElectricMobility from "./button Icons/Black/electric_mobility.svg";
import Environment from "./button Icons/Black/environment.svg";
import Transport from "./button Icons/Black/informal_transport.svg";
import inlandWater from "./button Icons/Black/inland_water.svg";
import Metro from "./button Icons/Black/metro.svg";
import NonMotor from "./button Icons/Black/non_motor.svg";
import Others from "./button Icons/Black/others.svg";
import Parking from "./button Icons/Black/parking.svg";
import PublicBuses from "./button Icons/Black/public_buses.svg";
import Railway from "./button Icons/Black/railways.svg";
import Road from "./button Icons/Black/road.svg";
import RoadSafety from "./button Icons/Black/road_safety.svg";
import ShippingPort from "./button Icons/Black/shipping_ports.svg";
import Traffic from "./button Icons/Black/traffic.svg";
import Urban from "./button Icons/Black/urban_freight.svg";
// White Icons
import CityLanduseWhite from "./button Icons/White/city_landuse_white.svg";
import CivialAviationWhite from "./button Icons/White/civial_aviation_white.svg";
import DemographicsWhite from "./button Icons/White/demographics_white.svg";
import ElectricMobilityWhite from "./button Icons/White/electric_mobility_white.svg";
import EnvironmentWhite from "./button Icons/White/environment_white.svg";
import TransportWhite from "./button Icons/White/informal_transport_white.svg";
import inlandWaterWhite from "./button Icons/White/inland_water_white.svg";
import MetroWhite from "./button Icons/White/metro_white.svg";
import NonMotorWhite from "./button Icons/White/non_motor_white.svg";
import OthersWhite from "./button Icons/White/others_white.svg";
import ParkingWhite from "./button Icons/White/parking_white.svg";
import PublicBusesWhite from "./button Icons/White/public_buses_white.svg";
import RailwayWhite from "./button Icons/White/railways_white.svg";
import RoadWhite from "./button Icons/White/road_white.svg";
import RoadSafetyWhite from "./button Icons/White/road_safety_white.svg";
import ShippingPortWhite from "./button Icons/White/shipping_ports_white.svg";
import TrafficWhite from "./button Icons/White/traffic_white.svg";
import UrbanWhite from "./button Icons/White/urban_freight_white.svg";
import Axios from "axios";

// Theme for checkbox
const innerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1C1C1C",
    },
  },
  typography: {
    body1: {
      fontWeight: "600",
    },
  },
});
// const sectorList = [
//   "Environment",
//   "City Landuse",
//   "Civil Aviation",
//   "Electric Mobility",
//   "Informal Transport",
//   "Inland Water Services",
//   "Metro Rail",
//   "Non-motorized transport",
//   "Parking",
//   "Public Buses",
//   "Railways",
//   "Road Infrastructure",
//   "Road Safety",
//   "Shipping and Ports",
//   "Demographics",
//   "Traffic",
//   "Urban Freight",
//   "Others",
// ];
const subSectorList = {
  Environment: ["Air Quality", "Meteorology"],
  "City Landuse": [
    "Existing city level landuse map",
    "Proposed city level landuse map",
    "City boundaries and divisons",
    "Public WiFi services",
  ],
  "Civil Aviation": ["Civil Aviation Infrastructure and Traffic Patterns"],
  "Electric Mobility": [
    "EV Charging infrastructure",
    "EV service centers",
    "E-rickshaw operations",
  ],
  "Informal Transport": [
    "Auto-rickshaws vehicle counts",
    "Auto-rickshaw operations",
  ],
  "Inland Water Services": ["Infrastructure and Traffic Patterns"],
  "Metro Rail": [
    "Metro operations",
    "Metro stations",
    "Public Transport Finance",
  ],
  "Non-motorized transport": [
    "Footpaths",
    "Cycle tracks",
    "Public Bike Sharing",
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
  ],
  "Public Buses": [
    "Bus operations",
    "Bus stations, stops, terminals and depots",
    "Public Transport Finance",
  ],
  Railways: ["Railway stations"],
  "Road Infrastructure": [
    "Road network base map",
    "Street lights",
    "Potholes",
    "Proposed Transport projects",
    "Road and Infrastructure Finance",
  ],
  "Road Safety": ["Road traffic accidents"],
  "Shipping and Ports": ["Infrastructure and Traffic Pattern"],
  Demographics: [
    "Household income and expenditure",
    "Housing",
    "Education infrastructure",
    "Employment",
    "Population",
    "Public Distribution Schemes",
    "Literacy",
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
  ],
  "Urban Freight": ["Freight Terminals"],
  Others: ["Others"],
};

const initialTextState = {
  Environment: "",
  "City Landuse": "",
  "Civil Aviation": "",
  "Electric Mobility": "",
  "Informal Transport": "",
  "Inland Water Services": "",
  "Metro Rail": "",
  "Non-motorized transport": "",
  Parking: "",
  "Public Buses": "",
  Railways: "",
  "Road Safety": "",
  "Shipping and Ports": "",
  Demographics: "",
  Traffic: "",
  "Urban Freight": "",
  Others: "",
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
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "white",
    cursor: " pointer",
    borderStyle: "groove",
  },
  buttonSelected: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: " #DC4351",
    color: " white",
    cursor: " pointer",
    borderStyle: "none",
  },
}));

const SectorDetails = (props) => {
  const [sectors, setSectors] = useState([]);
  const [state, setState] = useState(initialState);
  const [textValue, setTextValue] = useState(initialTextState);
  const [showNextPage, setShowNextPage] = useState(false);
  const [errorText, setErrorText] = useState("");
  const classes = useStyles();

  const handleCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const submitDatasets = (finalData) => {
    const url = "/api/cities/cityData";
    let dataToSubmit = {
      id: props.userId,
      datasets: finalData,
    };

    Axios.post(url, dataToSubmit)
      .then((res) => {
        // console.log(res.data)
        let Id = res.data.id;
      })
      .catch((err) => setErrorText(err));
  };
  //handle Image buttons
  const handleNextPage = () => {
    if (!sectors.length) {
      setErrorText("Please select atleast one DataSets (image)");
    } else {
      setErrorText("");
      if (props.showNext) {
        setShowNextPage(true);
      } else {
        let finalData = {};

        sectors.map((sector) => (finalData = { ...finalData, [sector]: [""] }));
        submitDatasets(finalData);
        props.next({ datasets: finalData });
      }
    }
  };

  const handleTextField = (event) => {
    setTextValue({ ...textValue, [event.target.name]: event.target.value });
  };
  // Handle image button
  const handleButton = (event) => {
    let sectorValue = event.target.value;
    if (!sectorValue) {
      // image is clicked
      sectorValue = event.target.alt;
    }
    // setSector(sectorValue);
    let newSectors = [...sectors];
    let index = newSectors.indexOf(sectorValue);
    // if sector not in sectors list then add it else remove it if already present
    if (index === -1) {
      setSectors([...sectors, sectorValue]);
    } else {
      newSectors.splice(index, 1);
      // console.log(newSectors);
      setSectors(newSectors);
    }
  };

  const handleNext = () => {
    const keys = Object.keys(state).filter((k) => state[k]);

    // eror handling
    const textfieldEmpty = Object.values(textValue).filter(
      (value) => value !== ""
    );
    // console.log("selected checkbox", keys);
    if (!keys.length && !textfieldEmpty.length) {
      setErrorText(
        "Please check atleast one checkbox or enter in given text field"
      );
    } else {
      setErrorText("");
      let finalData = {};

      for (let [key, values] of Object.entries(subSectorList)) {
        let ourdata = values.filter((value) => keys.includes(value));
        if (ourdata.length > 0) {
          // Check textfield data
          if (textValue[key]) {
            ourdata.push(textValue[key]);
          }
          finalData = { ...finalData, [key]: ourdata };
        }
      }
      submitDatasets(finalData);
      props.next({ datasets: finalData });
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom style={{ fontWeight: "600" }}>
        Data Availability
      </Typography>
      {!showNextPage ? (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sm={4} key={"Environment"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Environment")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Environment"
            >
              <img
                src={
                  sectors.includes("Environment")
                    ? EnvironmentWhite
                    : Environment
                }
                alt="Environment"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Environment
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"City"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("City Landuse")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="City Landuse"
            >
              <img
                src={
                  sectors.includes("City Landuse")
                    ? CityLanduseWhite
                    : CityLanduse
                }
                alt="City Landuse"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              City Landuse
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"Civil"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Civil Aviation")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Civil Aviation"
            >
              <img
                src={
                  sectors.includes("Civil Aviation")
                    ? CivialAviationWhite
                    : CivialAviation
                }
                alt="Civil Aviation"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Civil Aviation
            </button>
          </Grid>
          {/* Second row */}
          <Grid item xs={12} md={4} sm={4} key={"Electric"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Electric Mobility")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Electric Mobility"
            >
              <img
                src={
                  sectors.includes("Electric Mobility")
                    ? ElectricMobilityWhite
                    : ElectricMobility
                }
                alt="Electric Mobility"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Electric Mobility
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"Informal"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Informal Transport")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Informal Transport"
            >
              <img
                src={
                  sectors.includes("Informal Transport")
                    ? TransportWhite
                    : Transport
                }
                alt="Informal Transport"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Informal Transport
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"Water"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Inland Water Services")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Inland Water Services"
            >
              <img
                src={
                  sectors.includes("Inland Water Services")
                    ? inlandWaterWhite
                    : inlandWater
                }
                alt="Inland Water Services"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Inland Water Services
            </button>
          </Grid>
          {/* 3rd row */}
          <Grid item xs={12} md={4} sm={4} key={"Metro"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Metro Rail")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Metro Rail"
            >
              <img
                src={sectors.includes("Metro Rail") ? MetroWhite : Metro}
                alt="Metro Rail"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Metro Rail
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"motorized"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Non-motorized transport")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Non-motorized transport"
            >
              <img
                src={
                  sectors.includes("Non-motorized transport")
                    ? NonMotorWhite
                    : NonMotor
                }
                alt="Non-motorized transport"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Non-motorized transport
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"Parking"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Parking")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Parking"
            >
              <img
                src={sectors.includes("Parking") ? ParkingWhite : Parking}
                alt="Parking"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Parking
            </button>
          </Grid>
          {/* 4 row */}
          <Grid item xs={12} md={4} sm={4} key={"Buses"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Public Buses")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Public Buses"
            >
              <img
                src={
                  sectors.includes("Public Buses")
                    ? PublicBusesWhite
                    : PublicBuses
                }
                alt="Public Buses"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Public Buses
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"Railways"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Railways")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Railways"
            >
              <img
                src={sectors.includes("Railways") ? RailwayWhite : Railway}
                alt="Railways"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Railways
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"Infrastructure"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Road Infrastructure")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Road Infrastructure"
            >
              <img
                src={sectors.includes("Road Infrastructure") ? RoadWhite : Road}
                alt="Road Infrastructure"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Road Infrastructure
            </button>
          </Grid>
          {/* 5th row */}
          <Grid item xs={12} md={4} sm={4} key={"Safety"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Road Safety")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Road Safety"
            >
              <img
                src={
                  sectors.includes("Road Safety") ? RoadSafetyWhite : RoadSafety
                }
                alt="Road Safety"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Road Safety
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"Shipping"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Shipping and Ports")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Shipping and Ports"
            >
              <img
                src={
                  sectors.includes("Shipping and Ports")
                    ? ShippingPortWhite
                    : ShippingPort
                }
                alt="Shipping and Ports "
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Shipping and Ports
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"Demographics"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Demographics")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Demographics"
            >
              <img
                src={
                  sectors.includes("Demographics")
                    ? DemographicsWhite
                    : Demographics
                }
                alt="Demographics"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Demographics
            </button>
          </Grid>
          {/* 6th row */}
          <Grid item xs={12} md={4} sm={4} key={"Traffic"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Traffic")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Traffic"
            >
              <img
                src={sectors.includes("Traffic") ? TrafficWhite : Traffic}
                alt="Traffic"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Traffic
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"Urban"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Urban Freight")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Urban Freight"
            >
              <img
                src={sectors.includes("Urban Freight") ? UrbanWhite : Urban}
                alt="Urban"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Urban Freight
            </button>
          </Grid>
          <Grid item xs={12} md={4} sm={4} key={"Others"}>
            <button
              onClick={handleButton}
              className={
                sectors.includes("Others")
                  ? classes.buttonSelected
                  : classes.button
              }
              value="Others"
            >
              <img
                src={sectors.includes("Others") ? OthersWhite : Others}
                alt="Others"
                style={{ width: "50px", height: "50px", fill: "white" }}
              />
              <br></br>
              Others
            </button>
          </Grid>
          <Grid item xs={12}>
            <p style={{ color: "red", textAlign: "left" }}>{errorText}</p>
          </Grid>
          <Grid item xs={12} className={classes.buttons}>
            <ButtonGroup>
              <Button onClick={props.back}>Back</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextPage}
                style={{ backgroundColor: "#DC4351" }}
              >
                Next
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      ) : (
        <Grid item container direction="column" xs={12}>
          <Grid container>
            <React.Fragment>
              {sectors.length
                ? sectors.map((sector) => (
                    <Grid item container xs={12} style={{ textAlign: "left" }}>
                      <Grid item xs={12}>
                        <Typography
                          variant="h5"
                          gutterBottom
                          style={{ color: "#DC4351" }}
                        >
                          <strong>{sector}</strong>
                        </Typography>
                      </Grid>
                      {subSectorList[sector].map((subSector, id) => (
                        <Grid item xs={12}>
                          <ThemeProvider theme={innerTheme}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={state.sector}
                                  onChange={handleCheck}
                                  name={subSector}
                                  color="primary"
                                  id={sector}
                                />
                              }
                              label={subSector}
                            />
                          </ThemeProvider>
                          <Typography
                            variant="subtitle1"
                            style={{ marginTop: "-15px", marginLeft: "30px" }}
                          >
                            {subSectorDescList[subSector]}
                          </Typography>
                        </Grid>
                      ))}
                      <Grid
                        item
                        xs={12}
                        style={{ marginBottom: "30px", marginTop: "10px" }}
                      >
                        <TextField
                          required
                          id="other"
                          name={sector}
                          label="Please mention your datasets type here"
                          fullWidth
                          autoComplete="Others"
                          value={textValue[sector]}
                          onChange={handleTextField}
                        />
                      </Grid>
                    </Grid>
                  ))
                : null}
            </React.Fragment>
          </Grid>
          <Grid item xs={12}>
            <p style={{ color: "red", textAlign: "left" }}>{errorText}</p>
          </Grid>
          <Grid item xs={12} className={classes.buttons}>
            <ButtonGroup>
              <Button onClick={props.back}>Back</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                style={{ backgroundColor: "#DC4351" }}
              >
                Next
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default SectorDetails;
