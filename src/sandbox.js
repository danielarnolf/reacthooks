import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";

const moods = {
  happy: "HAPPY",
  sad: "SAD",
};

const MoodContext = createContext(moods);

function App(props) {
  const [count, setCount] = useState(0);
  const [mood, setMood] = useState('happy');

  useEffect(() => {
    alert("Hello side effect");
    //return () => alert('Goodbye Component')
  }, []);

  return (
    <MoodContext.Provider value={moods.sad}>
      <button onClick={() => {setCount(count + 1)}}>{count}</button>
      <button onClick={() => {setMood('happy')}}>Happy</button>
      <button onClick={() => {setMood('sad')}}>Sad</button>      
      <MoodEmoji />
    </MoodContext.Provider>
  );
}

function MoodEmoji() {
  const mood = useContext(MoodContext);
  return <p>{ mood }</p>
}

export default App;


import { useState } from "react";

function App(props) {
  const [count, setCount] = useState(10);
  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>+</button>
      <div>{count}</div>
    </div>
  );
}

export default App;

