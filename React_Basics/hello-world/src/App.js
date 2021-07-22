import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";
import Book from "./components/Book";

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
class App extends Component {
  // calculation can be done
  // props baire theke pass kora info, state component er nijer info
  // state can be used only in class based components

  // state
  state = {
    books: [
      { bookName: "Deyal", writer: "Humayun" },
      { bookName: "Lal Nil", writer: "Humayun Azad" },
      { bookName: "BD", writer: "1971" },
    ],
    otherProperty: "Hello from state",
  };
  // same as top
  // constructor() {
  //   super();
  //   this.state = {};
  // }

  changeBookState = (newBookSeries) => {
    console.log("Button Clicked");
    this.setState({
      books: [
        { bookName: newBookSeries, writer: "OIC" },
        { bookName: "Peace", writer: "Hasan Saju" },
        { bookName: "Teach urself c++", writer: "Schildt" },
      ],
    });
  };

  changeWithInputState = (event) => {
    this.setState({
      books: [
        { bookName: event.target.value, writer: "OIC" },
        { bookName: "Peace", writer: "Hasan Saju" },
        { bookName: "Teach urself c++", writer: "Schildt" },
      ],
    });
  };

  render() {
    // css just js er moto likha lagbe
    // right side string er moto, left side css without hyphen and will use lower camel cse
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
    };
    let obj = new Component();
    console.log(obj);
    return (
      <div className="App">
        <h2>Hello Ecfor</h2>
        <Person name="Saju" age="22">
          I am Saju
        </Person>
        <Person name="Fahad" age="32" />
        <Person name="Afnan" age="23" />
        <Person name="Dihan" age="323" />
        <h1 style={style}>Book List</h1>
        <Book bookName="1984" writer="George Orwell" />
        <Book bookName="Badshah Namdar" writer="Humayun Ahmed" />
        <Book bookName="Da Vinci Code" writer="Dan Brown" />
        <h2>Passing Info through State</h2>
        {/* changeBookState() dile page load howar sathe sathe function load hoye
        jabe  */}
        <button onClick={() => this.changeBookState("Passing with parameter")}>
          Change State
        </button>
        <input type="text" onChange={this.changeWithInputState}></input>

        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState}
        />
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer}
        />
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "Another Change")}
        />
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
