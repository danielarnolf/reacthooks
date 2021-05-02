import React, { useEffect, useState } from "react";
import { Hello } from "./Hello";
import {useFetch} from "./useFetch";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "", 
    firstName: "", 
    password: ""
  });

  const {data, loading} = useFetch('http://numbersapi.com/43/trivia');

  return (
    <>  
    <div>{loading ? "Loading..." : data}</div>
    {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button> */}
    {/* {showHello && <Hello/>} */}
    <input name="email" value={values.email} onChange={handleChange} />
    <input name="firstName" value={values.firstName} placeholder="First Name" onChange={handleChange} />
    <input name="password" type="password" value={values.password} onChange={handleChange} />
    </>
  );
}

export default App;
