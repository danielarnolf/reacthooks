import React, { useEffect } from 'react';

const useFetch = (url) => {

  useEffect(() => {
   fetch(url)
   .then((x) => {x.text()})
   .then((y) => {
    console.log(y);
   })
  }, [url])


  // return (
  //   <div>
      
  //   </div>
  // );
};

export default useFetch;