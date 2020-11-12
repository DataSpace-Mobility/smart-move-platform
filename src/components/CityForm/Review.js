import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button, ButtonGroup } from "@material-ui/core";
import { db } from "../../firebase";


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  }
}));

export default function Review(props) {
  const classes = useStyles();
  const { personData, datasets } = props.data;
  let personKeyList = [];
  let datasetKeyList = [];

  if (personData) {
    personKeyList = Object.keys(personData);
  }
  if (datasets) {
    datasetKeyList = Object.keys(datasets);
  }

  const handleSubmit = () =>{
    db.collection("forms").add({
      ...personData,
      datasets
    });
    // next page
    props.submit()
  }

  return (
    <React.Fragment>
      <Grid container spacing={2} style={{textAlign:"left"}}>
        <Grid item container direction="column" xs={12}>
          <Typography variant="h5" gutterBottom className={classes.title}>
            City Details
          </Typography>
          <Grid container>
            {personKeyList.map((key) => (
              <React.Fragment key={key}>
                <Grid item xs={6}>
                  <Typography gutterBottom>
                    <strong>{key}</strong>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{personData[key]}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12}>
          <Typography variant="h5" gutterBottom className={classes.title}>
            List of DataSets
          </Typography>
          <Grid container>
            {datasetKeyList.map((key) => (
              <React.Fragment key={key}>
                <Grid item xs={6}>
                  <Typography gutterBottom>
                    <strong>{key}</strong>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  {datasets[key]?.map((sector) => (
                    <Typography gutterBottom>{sector}</Typography>
                  ))}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.buttons}>
          <ButtonGroup>
            <Button
              onClick={props.back}
            >
              Back
            </Button>
            <Button variant="contained" color="primary"  style={{ backgroundColor: "#69BFC3"}} onClick={handleSubmit}>
              Submit
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
