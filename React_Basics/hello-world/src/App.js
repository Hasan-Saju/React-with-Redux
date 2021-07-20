import React from 'react';
import './App.css';


// JSX
function App() {
  return (
    <div className="App">
     <h2>Hello Ecfor</h2>
     <Person/>
     {/* <Person></Person> */}
    </div>
  );
}

function Person() {
  return(
    <div>
      <h3>I am person component.</h3>
    </div>
  );
}

export default App;
