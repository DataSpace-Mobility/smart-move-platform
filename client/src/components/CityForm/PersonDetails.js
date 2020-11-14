import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const organizationTypeList = [
  { name:"OrganizationType", value: "Smart City / SPV" },
  { name:"OrganizationType", value: "Municipal Corporation" },
  { name:"OrganizationType", value: "Public Sector Organization" },
  { name:"OrganizationType", value: "Research Institutions" },
  { name:"OrganizationType", value: "Private Organization" },
  { name:"OrganizationType", value: "Others" },
];

const citiesList = [
  {name:"City", value: "Port Blair" },
  {name:"City", value: "Vishakhapatnam" },
  {name:"City", value: "Tirupati" },
  {name:"City", value: "Kakinada" },
  {name:"City", value: "Amaravati" },
  {name:"City", value: "Pasighat" },
  {name:"City", value: "Guwahati" },
  {name:"City", value: "Muzaffarpur" },
  {name:"City", value: "Bhagalpur" },
  {name:"City", value: "Biharsharif" },
  {name:"City", value: "Patna" },
  {name:"City", value: "Chandigarh" },
  {name:"City", value: "Raipur" },
  {name:"City", value: "Bilaspur" },
  {name:"City", value: "Naya Raipur" },
  {name:"City", value: "Diu" },
  {name:"City", value: "Silvassa" },
  {name:"City", value: "New Delhi Municipal Council" },
  {name:"City", value: "Panaji" },
  {name:"City", value: "Gandhinagar" },
  {name:"City", value: "Ahmedabad" },
  {name:"City", value: "Surat" },
  {name:"City", value: "Vadodara" },
  {name:"City", value: "Rajkot" },
  {name:"City", value: "Dahod" },
  {name:"City", value: "Karnal" },
  {name:"City", value: "Faridabad" },
  {name:"City", value: "Dharamshala" },
  {name:"City", value: "Shimla" },
  {name:"City", value: "Srinagar" },
  {name:"City", value: "Jammu" },
  {name:"City", value: "Ranchi" },
  {name:"City", value: "Mangaluru" },
  {name:"City", value: "Belagavi" },
  {name:"City", value: "Shivamogga" },
  {name:"City", value: "HubballiDharwad" },
  {name:"City", value: "Tumakuru" },
  {name:"City", value: "Davanegere" },
  {name:"City", value: "Bengaluru" },
  {name:"City", value: "Kochi" },
  {name:"City", value: "Trivendrum" },
  {name:"City", value: "Kavaratti" },
  {name:"City", value: "Bhopal" },
  {name:"City", value: "Indore" },
  {name:"City", value: "Jabalpur" },
  {name:"City", value: "Gwalior" },
  {name:"City", value: "Sagar" },
  {name:"City", value: "Satna" },
  {name:"City", value: "Ujjain" },
  {name:"City", value: "Navi Mumbai" },
  {name:"City", value: "Nashik" },
  {name:"City", value: "Thane" },
  {name:"City", value: "Greater Mumbai" },
  {name:"City", value: "Amravati" },
  {name:"City", value: "Solapur" },
  {name:"City", value: "Nagpur" },
  {name:"City", value: "Kalyan-Dombivali" },
  {name:"City", value: "Aurangabad" },
  {name:"City", value: "Pune" },
  {name:"City", value: "Pimpri chinchwad" },
  {name:"City", value: "Imphal" },
  {name:"City", value: "Shillong" },
  {name:"City", value: "Aizawl" },
  {name:"City", value: "Kohima" },
  {name:"City", value: "Bhubaneshwar" },
  {name:"City", value: "Raurkela" },
  {name:"City", value: "Oulgaret" },
  {name:"City", value: "Puducherry" },
  {name:"City", value: "Ludhiana" },
  {name:"City", value: "Jalandhar" },
  {name:"City", value: "Amritsar" },
  {name:"City", value: "Jaipur" },
  {name:"City", value: "Udaipur" },
  {name:"City", value: "Kota" },
  {name:"City", value: "Ajmer" },
  {name:"City", value: "Namchi" },
  {name:"City", value: "Gangtok" },
  {name:"City", value: "Tiruchirapalli" },
  {name:"City", value: "Tirunelveli" },
  {name:"City", value: "Dindigul," },
  {name:"City", value: "Thanjavur," },
  {name:"City", value: "Tiruppur," },
  {name:"City", value: "Salem," },
  {name:"City", value: "Vellore," },
  {name:"City", value: "Coimbatore," },
  {name:"City", value: "Madurai," },
  {name:"City", value: "Erode," },
  {name:"City", value: "Thoothukudi" },
  {name:"City", value: "Chennai" },
  {name:"City", value: "Greater Hyderabad" },
  {name:"City", value: "Greater Warangal" },
  {name:"City", value: "Karimnagar" },
  {name:"City", value: "Agartala" },
  {name:"City", value: "Moradabad" },
  {name:"City", value: "Aligarh" },
  {name:"City", value: "Saharanpur" },
  {name:"City", value: "Bareilly" },
  {name:"City", value: "Jhansi" },
  {name:"City", value: "Kanpur" },
  {name:"City", value: "Allahabad" },
  {name:"City", value: "Lucknow" },
  {name:"City", value: "Varanasi" },
  {name:"City", value: "Ghaziabad" },
  {name:"City", value: "Agra" },
  {name:"City", value: "Rampur" },
  {name:"City", value: "Dehradun" },
  {name:"City", value: "New Town Kolkata" },
  {name:"City", value: "Bidhannagar" },
  {name:"City", value: "Durgapur" },
  {name:"City", value: "Haldia" },
];

const initialState = {
  OrganizationType: "",
  OrganizationName: "",
  City: "",
  Poc: "",
  Email: "",
  Phone: "",
};

const PersonDetails = (props) => {
  const [input, setInput] = useState(initialState);
  const [errorText, setErrorText] = useState([]);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validateString(string) {
    const re = /^[a-zA-Z_ //]+( [a-zA-Z_]*)*$/;
    return re.test(string);
  }

  function validateNumber(num){
    const re =/^\d{10}$/;
    return re.test(num);
  }

  const handleInput = (event, values) => {
    let fieldValue = event.target.value;
    let fieldName = event.target.name;
    if (!fieldValue && values) {
      fieldValue = values.value;
      fieldName = values.name;

    }
    setInput({ ...input, [fieldName]: fieldValue });
  };

  const handleNext = () => {
    let error = [];
    if (!validateString(input.OrganizationType) ) {
      error.push("Type of Organization");
    }
    if (!validateString(input.OrganizationName)) {
      error.push("Name of Organization ");
    }
    if (!validateString(input.City)) {
      error.push("City ");
    }
    if (!validateNumber(input.Phone)) {
      error.push("Phone ");
    }
    if (!validateEmail(input.Email)) {
      error.push("Email ");
    }
    if (!validateString(input.Poc)) {
      error.push("Point of Contact ");
    }
    if (!error.length) {
      props.next({ personData: input });
      setInput(initialState);
    }
    setErrorText(error);
  };
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Contact Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Autocomplete
            id="OrganizationType"
            options={organizationTypeList}
            getOptionLabel={(option) => option.value}
            onChange={handleInput}
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label="Type of Organization" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="OrganizationName"
            name="OrganizationName"
            label="Name of Organization"
            fullWidth
            autoComplete="Name of Organization"
            value={input.OrganizationName}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            freeSolo
            id="City"
            disableClearable
            options={citiesList}
            getOptionLabel={(option) => option.value}
            onChange={handleInput}
            renderInput={(params) => (
              <TextField
                {...params}
                label="City Name"
                fullWidth
                required
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Poc"
            name="Poc"
            label="Point of Contact"
            fullWidth
            autoComplete="Point of Contact"
            value={input.Poc}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Email"
            type="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="Email"
            value={input.Email}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Phone"
            name="Phone"
            label="Contact Number"
            fullWidth
            autoComplete="Contact"
            value={input.Phone}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <p style={{ color: "red", textAlign: "left" }}>
            {errorText.length
              ? `* ${errorText.join(",")} is not valid or empty`
              : null}
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            variant="contained"
            style={{ backgroundColor: "#69BFC3" }}
            color="primary"
            onClick={handleNext}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PersonDetails;
