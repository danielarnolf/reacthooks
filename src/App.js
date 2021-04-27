import { useState } from "react";

function App(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
    <input name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
    <input name="password" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
    </div>
  );
}

export default App;
