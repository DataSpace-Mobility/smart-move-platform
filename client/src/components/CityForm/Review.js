import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button, ButtonGroup } from "@material-ui/core";
// import { db } from "../../firebase";
import axios from "axios";
import {
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
} from "docx";
import { saveAs } from "file-saver";

function createHeader(FieldName, FieldValue) {
  return new Paragraph({
      tabStops: [
          {
              type: TabStopType.RIGHT,
              position: TabStopPosition.MAX,
          },
      ],
      children: [
          new TextRun({
              text: FieldName,
              bold: true,
              size:"28",
          }),
          new TextRun({
              text: `\t${FieldValue}`,
              size:"28",
          }),
      ],
  });
}

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
    // next page
    props.submit();
  };

  // Create Docx
  const docCreator = () => {
    const doc = new Document();

    doc.addSection({
      children: [
        new Paragraph({
          text: "Become a Data Partner",
          heading: HeadingLevel.TITLE,
        }),
        new Paragraph({
          text: "City Details",
          heading: HeadingLevel.HEADING_1,
        }),
        ...personKeyList.map( (key) => createHeader(key,personData[key])),
        new Paragraph({
          text: "List of DataSets",
          heading: HeadingLevel.HEADING_1,
        }),
        ...datasetKeyList.map( (key) => createHeader(key,datasets[key])),
      ],
    });

    Packer.toBlob(doc).then((blob) => {
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
                <Grid item xs={6} >
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
              style={{ backgroundColor: "#DC4351" }}
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
