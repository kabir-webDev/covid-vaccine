import React from "react";
import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section id="regi_form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input defaultValue="test" {...register("example")} />

        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </section>
  );
}

export default RegisterForm;
