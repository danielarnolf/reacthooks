import React, { useEffect, useState } from "react";
import {useFetch} from "./useFetch";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "", 
    firstName: "", 
    password: ""
  });

  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

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
    {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button> */}
    {/* {showHello && <Hello/>} */}
    <input name="email" value={values.email} onChange={handleChange} />
    <input name="firstName" value={values.firstName} placeholder="First Name" onChange={handleChange} />
    <input name="password" type="password" value={values.password} onChange={handleChange} />
    </>
  );
}

export default App;
