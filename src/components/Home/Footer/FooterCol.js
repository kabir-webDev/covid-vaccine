import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
}));

export default function FooterCol() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="float__link">
        <Fab
          color="primary"
          aria-label="git"
          size="medium"
          style={{ background: "#23262E", margin: 2 }}
        >
          <a href="https://github.com/kabir-webDev">
            <GitHubIcon fontSize="large" />
          </a>
        </Fab>
        <Fab
          color="primary"
          aria-label="in"
          size="medium"
          style={{ background: "#52BE80", margin: 2 }}
        >
          <a href="https://www.linkedin.com/in/kabirhasan/">
            <LinkedInIcon fontSize="large" />
          </a>
        </Fab>
        <Fab
          color="primary"
          aria-label="fb"
          size="medium"
          variant="round"
          style={{ background: "#0572E6", margin: 2 }}
        >
          <a href="https://www.facebook.com/skdrkabir/">
            <FacebookIcon fontSize="large" />
          </a>
        </Fab>
      </div>
    </div>
  );
}
