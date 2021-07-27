import React, { useState, useEffect } from "react";
import { db } from "../../../config/firebaseConfig";
import { useForm } from "react-hook-form";

function GetData() {
  const [user, setUser] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const res = db.collection("links").doc().set({
      name: data.name,
      url: data.url,
      description: data.description,
    });
  };

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

  //   console.log(user);

  const addData = () => {
    const res = db.collection("links").doc().set({
      name: "Tutul Sikder",
      url: "www.github.com",
      description: "I am a businessman",
    });
  };

  return (
    <>
      <h1>Data is Fetching</h1> <button onClick={addData}>Add data</button>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <input {...register("url")} />
        <input {...register("description")} />
        <input type="submit" />
      </form>
    </>
  );
}

export default GetData;
