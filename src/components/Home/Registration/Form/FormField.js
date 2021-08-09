import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./FormField.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { db } from "../../../../config/firebaseConfig";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import ReactPdf from "../ReactPdf";
import { PDFViewer } from "@react-pdf/renderer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Drawer from "../../../Dashboard/Drawer/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
  button: {
    backgroundColor: "#3c52b2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
}));

export default function FormField() {
  const [user, setUser] = useState([]);
  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm();

  const [pdf, setPdf] = useState(true);

  const ref = db.collection("vax-register");

  function getUsers() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUser(items);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);
  const id = user.length;

  const onSubmit = ({
    profession,
    name,
    nid,
    gender,
    age,
    email,
    phone,
    district,
    thana,
    hospital,
  }) => {
    const res = db
      .collection("vax-register")
      .doc()
      .set({
        id: id + 1,
        profession: profession,
        name: name,
        nid: nid,
        gender: gender,
        age: age,
        email: email,
        phone: phone,
        district: district,
        thana: thana,
        hospital: hospital,
      });
    reset();
    setTimeout(() => {
      setPdf(false);
    }, 2000);
  };

  return (
    <>
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
              required="true"
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
              <MenuItem value="University Students">
                University Students
              </MenuItem>
              <MenuItem value="Farmer">Farmer</MenuItem>
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
            </TextField>
            <TextField
              {...register("name")}
              id="standard-basic"
              label="Name"
              variant="standard"
              required="true"
            />
            <TextField
              {...register("nid")}
              id="standard-basic"
              label="NID No"
              variant="standard"
              required="true"
            />
            <TextField
              id="filled-select-currency"
              select
              label="Gender"
              {...register("gender")}
              variant="filled"
              required="true"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>
            <TextField
              {...register("age")}
              id="standard-basic"
              label="Age"
              variant="standard"
              required="true"
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
              required="true"
            />
            <TextField
              {...register("district")}
              id="standard-basic"
              label="District:"
              variant="standard"
              required="true"
            />
            <TextField
              {...register("thana")}
              id="standard-basic"
              label="Thana:"
              variant="standard"
              required="true"
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
            {/* <div className="submit-btn"> */}
            <button type="submit" value="Submit" className="button">
              <span>Submit</span>
            </button>
            <div className="pdf-btn">
              <Link to="/pdf">
                <Button
                  className={classes.button}
                  style={{ padding: 10 }}
                  variant="contained"
                  disabled={pdf}
                >
                  Download PDF <GetAppIcon />
                </Button>
              </Link>
              {/* <Switch>
                <Route path="/pdf">
                  <Drawer />
                </Route>
              </Switch> */}
            </div>
            {/* </div> */}
          </form>
          <br />
        </div>
      </div>
      {/* <PDFViewer>
        <ReactPdf />
      </PDFViewer> */}
    </>
  );
}
