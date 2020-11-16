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
    textAlign:"left",
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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{marginTop:"50px"}}>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6">
            Who can become a data partner as part of the SMART-MOVE challenge?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            From 15.11.2020 to 15.01.2021 the data partners are invited to share
            their urban mobility datasets on <Link to="/form">https://smartmove.niua.org/form </Link>
            Data Partners are Smart Cities, State Capitals, Cities (with more
            than 500,000 population), Autonomous Bodies, Public Transport
            Authorities, Private Sector Partners etc. from India.
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
            Why should cities partner with MoHUA as part of the SMART-MOVE
            challenge?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            By participating in the SMART-MOVE challenge, cities will be able to
            collaborate with students and researchers in finding innovative
            solutions to overcome the challenges faced due to COVID-19 pandemic
            and plan for the post-pandemic city. Cities will have the
            opportunity to collaborate with students and researchers to develop
            quick and innovative solutions to become Aatma Nirbhar
            (self-reliant) and help cities to transform into a digitally
            empowered society. The challenge will also help cities to support
            solutions for enhancing innovation in urban mobility by taking the
            current situation as an opportunity to improve urban mobility system
            and to help public transport’s and freight recovery from the ongoing
            COVID-19 crisis using big data.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6">How will the data partners collaborate with students and researchers as part of the SMART-MOVE challenge?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            On 15.01.2021, a review committee of international and national
            urban mobility experts, bureaucrats, academicians, data scientists,
            industry professionals, city officials, policy makers, think tanks
            etc will announce the shortlisted concept notes submitted by the
            participating teams in the Stage I selection process. From
            15.01.2021 to 15.02.2021 virtual workshops would be organised, the
            shortlisted concept notes and cities will be matched to collaborate
            and work together with the organizers, mentoring committee to refine
            their solutions. Cities and mentors will give guidance to the
            participating team to adapt and scale their concepts to the specific
            local context as a solution to the urban challenges. The
            challenge-owning cities and mentors will be mentoring the
            participating teams to submit their final solution by 31.03.2021.{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
