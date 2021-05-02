import React, { useEffect, useState } from "react";
import { Hello } from "./Hello";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({email: "", firstName: "", password: ""});


  // const [showHello, setShowHello] = useState(true);

  // on unmount, cleaner
  useEffect(() => {

    const onMouseMove = e => {
      console.log(e);
    }

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [])

  return (
    <>
    {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button> */}
    {/* {showHello && <Hello/>} */}
    <input name="email" value={values.email} onChange={handleChange} />
    <input name="firstName" value={values.firstName} placeholder="First Name" onChange={handleChange} />
    <input name="password" type="password" value={values.password} onChange={handleChange} />
    </>
  );
}

export default App;
