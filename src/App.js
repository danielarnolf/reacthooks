import React, { useEffect, useRef, useState } from "react";
import {useFetch} from "./useFetch";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({
    email: "", 
    firstName: "", 
    password: ""
  });

  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

  const inputRef = useRef();
  const hello = useRef(() => console.log('Hello Ref'))
  const [showHello, setShowHello] = useState(true)
  // Persist value of count

  useEffect(() => { 
    localStorage.setItem('count', JSON.stringify(count));
  }, [count])

  return (
    <>  
    <div>{loading ? "Loading..." : data}</div>
    <div>Count: {count}</div>
    <button onClick={() => setCount( c => c + 1 )}>Increase</button>
    <button onClick={() => setCount( c => c - 1 )}>Decrease</button>
    <button onClick={() => setCount( 0 )}>Reset</button>
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
