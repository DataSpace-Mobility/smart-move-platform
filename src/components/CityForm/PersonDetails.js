import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const initialState = {
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

  const handleInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleNext = () => {
    let error = [];
    if (!input.City) {
      error.push("City ");
    }
    if (!input.Phone) {
      error.push("Phone ");
    }
    if (!input.Email || !validateEmail(input.Email)) {
      error.push("Email ");
    }
    if (!input.Poc) {
      error.push("Point of Contact ");
    }
    if (!error.length) {
      props.next({ personData: input });
      setInput(initialState);
    }
    // console.log("Error Form ", error);
    setErrorText(error);
  };

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        City Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="City"
            name="City"
            label="City Name"
            fullWidth
            autoComplete="City Name"
            value={input.City}
            onChange={handleInput}
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
            style={{ backgroundColor: "#69BFC3"}}
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
