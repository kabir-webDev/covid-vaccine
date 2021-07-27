import * as React from "react";
import { useForm } from "react-hook-form";
import "./FormField.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

export default function FormField() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="box">
      <div className="form_container">
        <h1>Register For Covid Vaccination</h1> <br />
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            {...register("name")}
            id="filled-basic"
            label="Enter Your Name"
            variant="filled"
          />
          <TextField
            {...register("nid")}
            id="filled-basic"
            label="Enter NID No"
            variant="filled"
          />
          <TextField
            id="filled-select-currency"
            select
            label="Gender"
            {...register("gender")}
            variant="filled"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <br /> <br />
          <TextField
            {...register("name")}
            id="filled-basic"
            label="Enter Your Name"
            variant="filled"
          />
          <TextField
            {...register("nid")}
            id="filled-basic"
            label="Enter NID No"
            variant="filled"
          />
          <TextField
            id="filled-select-currency"
            select
            label="Gender"
            {...register("gender")}
            variant="filled"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <br /> <br />
          <TextField
            {...register("name")}
            id="filled-basic"
            label="Enter Your Name"
            variant="filled"
          />
          <TextField
            {...register("nid")}
            id="filled-basic"
            label="Enter NID No"
            variant="filled"
          />
          <TextField
            id="filled-select-currency"
            select
            label="Gender"
            {...register("gender")}
            variant="filled"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <br /> <br />
          <TextField
            {...register("name")}
            id="filled-basic"
            label="Enter Your Name"
            variant="filled"
          />
          <TextField
            {...register("nid")}
            id="filled-basic"
            label="Enter NID No"
            variant="filled"
          />
          <TextField
            id="filled-select-currency"
            select
            label="Gender"
            {...register("gender")}
            variant="filled"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <br />
          <br />
          <button type="submit" value="Submit" className="button">
            <span>Submit</span>
          </button>
        </form>
        <br />
      </div>
    </div>
  );
}
