import "./FAQ.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "100%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(25),
    color: theme.palette.text.secondary,
  },
}));

export default function FAQ() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section id="faq" className="fq">
      <h4 className="miniTitle text-center">Frequently Asked Questions</h4>
      <div className="text-center">
        <br />
        <br />
      </div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Is online registration mandatory for Covid 19 vaccination?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "#A9DFBF", color: "#1C2833" }}>
          <Typography>
            Vaccination Centres provide for a limited number of on-spot
            registration slots every day. Beneficiaries aged 45 years and above
            can schedule appointments online or walk-in to vaccination centres.
            Beneficiaries aged 18 years and above can schedule appointments
            online or walk-in to Government vaccination centres. However,
            beneficiaries aged 18-44 years should mandatorily register
            themselves and schedule appointment online before going to a Private
            vaccination centre.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            Is there any registration charges to be paid?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "#A9DFBF", color: "#1C2833" }}>
          <Typography>No. There is no registration charge.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            Can I register for vaccination without Aadhaar card?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "#A9DFBF", color: "#1C2833" }}>
          <Typography>
            Yes, you can register on CoWIN portal using any of the following ID
            proofs: <br />
            a. National ID Card <br />
            d. Passport
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            Is vaccination free at all vaccination centres?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "#A9DFBF", color: "#1C2833" }}>
          <Typography>
            No. Currently, vaccination is free at Government hospitals and
            charged at INR 250 in Private hospitals for beneficiaries aged 30
            years and above.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>
            Can I choose the vaccine?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "#A9DFBF", color: "#1C2833" }}>
          <Typography>
            System will show the vaccine being administered in each vaccination
            centre at the time of scheduling an appointment. Beneficiary can
            choose the vaccination centre as per their choice of vaccine being
            administered.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
