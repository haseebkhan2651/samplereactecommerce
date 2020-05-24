import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState("Ello");

  fetch("/people")
  .then(res => res.json())
  .then((data) => {
    setName(data);
    console.log(name);
    console.log(data);
    console.log(name.name);

  });

  return (
    <div className="App">
      <header className="App-header">
        <p>This is an ecommerce project made by {name.name} </p>
      </header>
    </div>
  );
}

export default App;
