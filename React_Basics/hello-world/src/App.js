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
    let obj = new Component();
    console.log(obj); 
    return (
          <div className="App">
           <h2>Hello Ecfor</h2>
           <Person name="Saju" age="22">I am Saju</Person>
           <Person name="Fahad" age="32"/>
           <Person name="Afnan" age="23"/>
           <Person name="Dihan" age="323"/>
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
