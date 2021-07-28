import * as React from "react";
import { useForm } from "react-hook-form";
import "./FormField.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import AssignmentIcon from "@material-ui/icons/Assignment";

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
        <h1>
          <AssignmentIcon style={{ fontSize: 42, color: "teal" }} /> Register
          For Covid Vaccination{" "}
          <AssignmentIcon style={{ fontSize: 42, color: "teal" }} />
        </h1>{" "}
        <br />
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            style={{ width: "74.5%" }}
            id="filled-select-currency"
            select
            label="Profession"
            {...register("profession")}
            variant="filled"
          >
            <MenuItem
              value="All officers and employees of the Government Health and Family
          Planning Department"
            >
              All officers and employees of the Government Health and Family
              Planning Department
            </MenuItem>
            <MenuItem value="Approved private health and family planning officers-employees">
              Approved private health and family planning officers-employees
            </MenuItem>
            <MenuItem value="Educational Institutions">
              Educational Institutions
            </MenuItem>
            <MenuItem value="Front-line law enforcement agency">
              Front-line law enforcement agency
            </MenuItem>
            <MenuItem value="Bar Council Registrar Attorney">
              Bar Council Registrar Attorney
            </MenuItem>
            <MenuItem value="Front-line media workers">
              Front-line media workers
            </MenuItem>
            <MenuItem value="Bank officer-employee">
              Bank officer-employee
            </MenuItem>
            <MenuItem value="Farmer">Farmer</MenuItem>
            <MenuItem value="University Students">University Students</MenuItem>
          </TextField>
          <TextField
            {...register("name")}
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <TextField
            {...register("nid")}
            id="standard-basic"
            label="NID No"
            variant="standard"
          />
          <TextField
            // style={{ width: "74.5%" }}
            id="filled-select-currency"
            select
            label="Gender"
            {...register("gender")}
            variant="filled"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            {...register("age")}
            id="standard-basic"
            label="Age"
            variant="standard"
          />
          <br /> <br />
          <TextField
            {...register("email")}
            id="standard-basic"
            label="Email:"
            variant="standard"
          />
          <TextField
            {...register("phone")}
            id="standard-basic"
            label="Phone:"
            variant="standard"
          />
          <TextField
            {...register("district")}
            id="standard-basic"
            label="District:"
            variant="standard"
          />
          <TextField
            {...register("thana")}
            id="standard-basic"
            label="Thana:"
            variant="standard"
          />
          <TextField
            style={{ width: "74.5%" }}
            id="standard-basic"
            label="Hospital:"
            {...register("hospital")}
            variant="standard"
          ></TextField>
          <br /> <br />
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
