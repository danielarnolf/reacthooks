import React, { useEffect, useState } from "react";
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

  const [showHello, setShowHello] = useState(true);

  return (
    <>
    <button onClick={() => setShowHello(!showHello)}>Toggle</button>
    {showHello && <Hello/>}
    <input name="email" value={values.email} onChange={handleChange} />
    <input name="firstName" value={values.firstName} placeholder="First Name" onChange={handleChange} />
    <input name="password" type="password" value={values.password} onChange={handleChange} />
    </>
  );
}

export default App;
