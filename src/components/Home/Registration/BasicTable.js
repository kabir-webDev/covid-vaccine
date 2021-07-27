import React, { useState, useEffect } from "react";
import { db } from "../../../config/firebaseConfig";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const [user, setUser] = useState([]);
  const ref = db.collection("links");
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
  console.log(user);

  function createData(name, url, description) {
    return { name, url, description };
  }
  const data = {
    name: "Kabir",
    url: "www.google.com",
    description: "Best search engine",
  };
  const rows = [createData(user.name, user.url, user.description)];

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME:</TableCell>
            <TableCell>URL:</TableCell>
            <TableCell>DESCRIPTION:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.url}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
