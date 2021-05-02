import React, {useEffect} from 'react';

export const Hello = () => {

  // on unmount, cleaner
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmount");
    }
  }, [])

  return (
    <div>
      hello
    </div>
  );
};

