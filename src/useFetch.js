import { useEffect, useRef, useState } from 'react';

export const useFetch = url => {

  const isCurrent = useRef(true)
  const [state, setState] = useState({data: null, loading: true});

  useEffect(() => {
    return () => {
      // called when component will unmount
      isCurrent.current = false;

    }
  }, [])

  useEffect(() => {
   //setState({data: null, loading: true});
   setState(state => ({data: state.data, loading: true}));

   fetch(url)
   .then(x => x.text())
   .then(y => {
    setTimeout(() => {
     if(isCurrent.current) {
      setState({data: y, loading: false})       
     }      
    }, 100);
   })
  }, [url]);

  return state;

};

 