import React, { useState } from 'react';

function App () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return(
    <>
      <h1>Hello World, {name}!</h1>
      <p>Digite seu nome abaixo:</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <p>You clicked me {count} times</p>
      <button onClick = {() => setCount(count + 1)}>Click me!</button>
    </>
  )
}

export default App;