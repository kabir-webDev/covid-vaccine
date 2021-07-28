import React, { useState, useEffect } from "react";
import { db } from "../../../config/firebaseConfig";
import MaterialTable from "material-table";

function Drawer() {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Gender", field: "gender" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "District", field: "district" },
    { title: "Hospital", field: "hospital" },
  ];

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
  console.log(user);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);
  console.log(data);

  return (
    <div className="App">
      <h4 align="center">Registered Person for Vaccine</h4>
      <MaterialTable
        title="Registered User Data"
        data={user}
        columns={columns}
      />
    </div>
  );
}

export default Drawer;
