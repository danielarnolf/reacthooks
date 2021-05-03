import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useMeasure } from "./useMeasure";
import { useFetch } from "./useFetch";

export const Hello = () => {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  // Persist value of count
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);


  const divRef = useRef();
  const rect = useMeasure(divRef, [data])

  return (
    <div>
      <div style={{display: "flex"}}>
        <div ref={divRef}>{loading ? "Loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>Count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

// import React, {useEffect} from 'react';

// export const Hello = () => {

//   // on unmount, cleaner
//   useEffect(() => {
//     console.log("render");
//     return () => {
//       console.log("unmount");
//     }
//   }, [])

//   return (
//     <div>
//       hello
//     </div>
//   );
// };
