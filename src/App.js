import React from "react";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({email: "", password: ""});

  return (
    <>
    <input name="email" value={values.email} onChange={handleChange} />
    <input name="password" type="password" value={values.password} onChange={handleChange} />
    </>
  );
}

export default App;
