import React, { useEffect } from "react";
import { Hello } from "./Hello";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({email: "", firstName: "", password: ""});

  // on first render
  useEffect(() => {
    console.log("First Render");
  }, [])

  // on changes to email value
  useEffect(() => {
    console.log("render");
  }, [values.email])

  // on unmount, cleaner
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("Unmount");
    }
  }, [])





  return (
    <>
    <Hello/>
    <input name="email" value={values.email} onChange={handleChange} />
    <input name="firstName" value={values.firstName} placeholder="First Name" onChange={handleChange} />
    <input name="password" type="password" value={values.password} onChange={handleChange} />
    </>
  );
}

export default App;
