import React,{Component} from 'react';
import './App.css';
import Person from './components/Person'


// JSX
// Functional Component
// function App() {
//   return (
//     <div className="App">
//      <h2>Hello Ecfor</h2>
//      <Person/>
//      // <Person></Person> 
//     </div>
//   );

//   // return React.createElement('div',{className:"App"},React.createElement('h1',null,"Hello World"),<Person/>);
//   // React.createElement('tag',attribute,vitore ja thakbe)
// }

// class attribute in html is className in jsx
// only 1 root element is possible in jsx

// Class component
class App extends Component{
  // calculation can be done
  render(){
    return (
          <div className="App">
           <h2>Hello Ecfor</h2>
           <Person/>
          </div>
        );
  }
}


// function Person() {
//   return(
//     <div>
//       <h3>I am person component.</h3>
//     </div>
//   );

//   // return React.createElement('div',null,React.createElement('h1',null,"I am person component"));
// }

export default App;
