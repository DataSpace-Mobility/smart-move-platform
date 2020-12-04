import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    textAlign: "left",
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedFaqAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6">Who can be a Data Partner?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            Any organisation with data related to Indian urban mobility is most
            welcome to collaborate as a Data Partner for the SMART MOVE
            Challenge, regardless of its nature, size and/or structure.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h6">
            How can I register as a Data Partner?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            To become a Data Partner at the SMART MOVE Challenge you can easily
            register at: <Link to="/form">https://smartmove.niua.org/#/form</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6">Why should I share the data?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            By becoming a Data Partner and sharing your urban mobility related
            data, you will be actively contributing to improve how Indian
            citizens and goods commute within urban areas. By inculcating the
            culture of data sharing in the mobility sector, data-led solutions
            will be developed to offer sustainable, safe, efficient and
            inclusive urban mobility
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant="h6">How can I share my data?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            We have made data sharing easy and secure for you. Once you have
            registered as a Data Partner, you will receive a confirmation email
            containing instructions, along with username and password, to access
            our secure file-sharing platform.<br></br> Click on the access link
            to begin the data sharing process. You can easily drag-and-drop the
            datasets that you want to share.<br></br>Once you have completed
            this process, you have contributed to helping improve urban mobility
            in India by becoming a Data Partner of the SMART MOVE Innovative
            Urban Mobility Challenge.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography variant="h6">
            Which platform will be utilised to securely share my data during the
            SMART MOVE Challenge?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            Mobility DataSpace <Link>https://dataspace.mobi/</Link>, a secure
            data sharing platform developed by India Smart Cities Fellows at the
            National Institute of Urban Affairs, is used to share data from the
            diverse Data Partners during the SMART MOVE Challenge.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography variant="h6">
            Do I have to invest manpower and/or money to pre-process and/or
            clean my datasets to be eligible?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            With the help of automated data processing pipelines deployed at
            Mobility DataSpace and our team of data experts, your diverse
            datasets, regardless of the sector, will be cleaned and
            pre-processed before being made available to Participants during the
            SMART MOVE Challenge. Of course, you will also be able to access
            your data in an optimised and clean format. This is just one of the
            multiple benefits of becoming a SMART MOVE Data Partner!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography variant="h6">
          What format should I use to share my data? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            The only requisite to share your data is that it needs to be in a
            machine-readable format. It doesn’t matter if it is an Excel sheet
            (.xls), Comma-separated values (.csv), JavaScript Object Notation
            (JSON) or any other format. We highly appreciate your contribution
            and are willing to accept all your datasets.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography variant="h6">
            Which licensing schemes will be available to restrict the
            shareability of my uploaded data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            The organising partners of the SMART MOVE have developed various
            customised data licenses that can be attached to each dataset shared
            by the Data Partners during the SMART MOVE Challenge. Depending on
            the characteristics of the dataset and the preference of the Data
            Partner, you will be able to choose a corresponding license. This
            license allows you to fully determine how each of your datasets can
            be used during the SMART MOVE Challenge.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
