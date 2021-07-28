import React from "react";
import GetData from "./GetData";
import BasicTable from "./BasicTable";
import FormField from "./Form/FormField";
import "./RegisterForm.css";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";

function RegisterForm() {
  return (
    <>
      <div className="form__container">
        <FormField />
        <br />
      </div>
    </>
  );
}

export default RegisterForm;
