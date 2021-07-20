import React, {Component} from 'react'; //for compiling jsx in Person()

// function Person() {
//   return(
//     <div>
//       <h3>I am person component.</h3>
//     </div>
//   );
// }

// converting to arrow function

// dynamic function component
// let Person=(props)=>{
//   return(
//     <div>
//       <h3>I am person component.</h3>
//       <h4>Name: {props.name} and Age: {props.age} years</h4>
//       <h4>Extra Info: {props.children} </h4>
//       <h3>Number: {Math.random()}</h3>
//     </div>
//   );
// }


// dynamic class component
// props component er element tai super use kora lage
class Person extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
          <div>
            <h3>I am person component.</h3>
            <h4>Name: {this.props.name} and Age: {this.props.age} years</h4>
            <h4>Extra Info: {this.props.children} </h4>
            <h3>Number: {Math.random()}</h3>
          </div>
        );
  }
}


export default Person;