import React, { useRef } from 'react';

export const Hello = () => {

  const renders = useRef(0);

  console.log('hello renders: ', renders.current++);

  return (
    <div>
      hello
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

