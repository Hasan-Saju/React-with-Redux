import React, { Component } from "react";

class NewBookUncontrol extends Component {
  constructor(props) {
    super(props);
    this.bookName = React.createRef();
    this.writer = React.createRef();
    this.description = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    console.log(this.bookName.current.value);
    console.log(this.writer.current.value);
    console.log(this.description.current.value);

    event.preventDefault(); //stop reloading after submit
  };

  render() {
    return (
      <div>
        <h1>New Book Entry Uncontrolled Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Book Name: </label>
          <br />
          <input type="text" name="bookName" ref={this.bookName} />
          <br />
          <label>Writer: </label>
          <br />
          <input type="text" name="writer" ref={this.writer} />
          <br />
          <label>Description: </label>
          <br />
          <textarea type="text" name="description" ref={this.description} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBookUncontrol;