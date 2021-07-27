import React from "react";
import GetData from "./GetData";
import BasicTable from "./BasicTable";
import FormField from "./Form/FormField";
import "./RegisterForm.css";

function RegisterForm() {
  return (
    <div className="form__container">
      {/* <GetData /> */}
      <FormField />
      <br />
    </div>
  );
}

export default RegisterForm;
