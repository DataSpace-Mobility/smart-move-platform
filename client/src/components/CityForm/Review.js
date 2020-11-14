import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button, ButtonGroup } from "@material-ui/core";
// import { db } from "../../firebase";
import axios from "axios";
import { Document, HeadingLevel, Packer, Paragraph, Table, TableCell, TableRow } from "docx";
import { saveAs } from "file-saver";



const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Review(props) {
  const classes = useStyles();
  const { personData, datasets } = props.data;
  let personKeyList = [];
  let datasetKeyList = [];

  if (personData) {
    personKeyList = Object.keys(personData);
    // console.log(personKeyList);
  }
  if (datasets) {
    datasetKeyList = Object.keys(datasets);
    // console.log('datasets:',datasetKeyList);
  }

  const handleSubmit = () => {
    const url = "/api/cities/data";
    let dataToSubmit = {
      ...personData,
      datasets,
    };

    axios
      .post(url, dataToSubmit)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    // console.log('data submitted');
    // firebase
    // db.collection("forms").add({
    //   ...personData,
    //   datasets
    // });
    // next page
    props.submit();
  };


  const docCreator = () => {
    const doc = new Document();
    
    // personData[key]
    const tablerows = personKeyList.map( ( key) => 
    {
      return new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph(key)],
          }),
          new TableCell({
            children: new Paragraph(personData[key]),
          }),
        ],
      })
    }
    
    
    );
    console.log('tb',tablerows);
    const table = new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph(personData)],
            }),
            new TableCell({
              children: [],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [],
            }),
            new TableCell({
              children: [new Paragraph(datasets)],
            }),
          ],
        }),
      ],
    });
  
    doc.addSection({
      children:[
        new Paragraph({
          text:"Become a Data Partner",
          heading:HeadingLevel.TITLE,
        }),
        table
      ],
      
    });

   
    Packer.toBlob(doc).then(blob => {
      // console.log(blob);
      saveAs(blob, "example.docx");
      // console.log("Document created successfully");
    });
  };

  return (
    <React.Fragment>
      <Grid container spacing={2} style={{ textAlign: "left" }}>
        <Grid item xs={12}>
          <Button onClick={docCreator}>Download Form</Button>
        </Grid>
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
            <Button onClick={props.back}>Back</Button>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#69BFC3" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
