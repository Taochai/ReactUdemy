import React from 'react';
import './App.css';
import Person from './Person/Person';
function App() {
  return (
    <div className="App">
        <h1>Hi,I`m a React App</h1>
        <p>This is really working!</p>
        <Person name="Eric" age={25}> This is props children </Person>
        <Person/>
        <Person/>
    </div>
  );
}

export default App;
