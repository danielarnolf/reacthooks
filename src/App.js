import React, { useRef, useState } from "react";

import { useForm } from "./useForm";
import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({
    email: "", 
    firstName: "", 
    password: ""
  });

  const inputRef = useRef();
  const hello = useRef(() => console.log('Hello Ref'))
  const [showHello, setShowHello] = useState(true)
  return (
    <>  
    <button onClick={() => setShowHello(!showHello)}>Toggle</button>
    {showHello && <Hello/>}
    <input ref={inputRef} name="email" value={values.email} onChange={handleChange} />
    <input name="firstName" value={values.firstName} placeholder="First Name" onChange={handleChange} />
    <input name="password" type="password" value={values.password} onChange={handleChange} />
    <button onClick={() => {
      inputRef.current.focus();
      hello.current();
      }}>Focus</button>
    </>
  );
}

export default App;
