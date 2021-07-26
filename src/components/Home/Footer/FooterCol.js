import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FooterCol() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="git" size="medium">
        <a href="https://google.com">
          <GitHubIcon />
        </a>
      </Fab>
      <Fab color="primary" aria-label="in" size="medium">
        <LinkedInIcon />
      </Fab>
      <Fab color="primary" aria-label="fb" size="medium">
        <FacebookIcon />
      </Fab>
    </div>
  );
}
