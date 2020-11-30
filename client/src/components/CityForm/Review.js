import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button, ButtonGroup } from "@material-ui/core";

import {
  BorderStyle,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";

function createTable(FieldName, FieldValue) {
  return new Table({
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    borders: {
      top: {
        style: BorderStyle.NONE,
      },
      bottom: {
        style: BorderStyle.NONE,
      },
      right: {
        style: BorderStyle.NONE,
      },
      left: {
        style: BorderStyle.NONE,
      },
      insideHorizontal: {
        style: BorderStyle.NONE,
      },
      insideVertical: {
        style: BorderStyle.NONE,
      },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: FieldName,
                    bold: true,
                    size: "26",
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: `${FieldValue}`,
                  size: "26",
                }),
              ],
            })],
          }),
        ],
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
  const [docString, setDocString] = useState("");
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
    // console.log(docString);
    props.submit(docString);
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
        ...personKeyList.map((key) => createTable(key, personData[key])),
        new Paragraph({
          text: "List of DataSets",
          heading: HeadingLevel.HEADING_1,
        }),
        ...datasetKeyList.map((key) => createTable(key, datasets[key])),
      ],
    });
    Packer.toBase64String(doc).then((docstring) => {
      setDocString(docstring);
      // window.open("data:application/msword;base64," + docstring);

    });
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "smart-move-data-list.docx");
      // setDocString(docstring);
      // console.log("Document created successfully");
    });
  };
  // console.log(docString);
  return (
    <React.Fragment>
      <Grid container spacing={2} style={{ textAlign: "left" }}>
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
        <Grid item xs={12}>
          <Button
            onClick={docCreator}
            style={{ backgroundColor: "#DC4351", color: "white" }}
          >
            Download Form
          </Button>
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
