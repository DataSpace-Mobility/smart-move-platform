import React, { useEffect, useState } from "react";
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
import Axios from "axios";

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
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${FieldValue}`,
                    size: "26",
                  }),
                ],
              }),
            ],
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
  const [doc, setDoc] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { personData, datasets } = props.data;
  let personKeyList = [];
  let datasetKeyList = [];

  // Create Docx
  const docCreator = () => {
    const document = new Document();
    document.addSection({
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
    setDoc(document);
  };

  // Download the report
  const downloadDocs = () => {
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "smart-move-data-list.docx");
      // console.log("Document created successfully");
    });
  };

  if (personData && datasets) {
    personKeyList = Object.keys(personData);
    datasetKeyList = Object.keys(datasets);
    // console.log(personKeyList);
  } else {
    setErrorMsg("Received no data");
  }

  const handleSubmit = () => {
    // console.log(docString);
    Packer.toBase64String(doc).then((docstring) => {
      registerUserMail(docstring);
    });
  };

  const registerUserMail = (docString) => {
    // console.log(cityData.personData);

    const { Email, Poc } = personData;
    const url = "/api/users/registerEmai";
    Axios.post(url, { Poc, Email, doc: docString })
      .then((res) => {
        // console.log(res.status);
        // console.log(res.data.message);
        const msg = res.data.message;
        if (msg === "User Created") {
          props.submit();
          // window.open('https://storage.dataspace.mobi')
        } else {
          setErrorMsg(JSON.stringify(msg));
          // throw new Error(JSON.stringify(msg));
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(
          "Error in Response Please try again or Reach out to us at smartmove@niua.org "
        );
      });
  };

  useEffect(() => {
    docCreator();
  }, [props.data]);

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
            onClick={downloadDocs}
            style={{ backgroundColor: "#DC4351", color: "white" }}
          >
            Download Form
          </Button>
        </Grid>
        <Grid item xs={12}>
          <p style={{ color: "red", textAlign: "left" }}>{errorMsg}</p>
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
