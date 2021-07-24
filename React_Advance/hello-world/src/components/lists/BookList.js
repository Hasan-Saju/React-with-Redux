import React, { Component } from "react";
import Book from "../representational/Book";

class BookList extends Component {
  constructor(props) {
    super(props);
    console.log("BookList constructor");
  }

  UNSAFE_componentWillMount() {
    console.log("BookList componentWillMount!");
  }

  componentDidMount() {
    console.log("BookList componentDidMount!");
  }

  //   Component Update Lifecycle(By props)
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("Updated BookList componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Updated BookList shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("Updated BookList componentWillUpdate");
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("Updated BookList componentDidUpdate");
  }

  render() {
    console.log("BookList render");
    return this.props.books.map((book, index) => {
      return (
        <Book
          bookName={book.bookName}
          writer={book.writer}
          delete={() => this.props.deleteBookState(index)}
          key={book.id}
          inputName={(event) => this.props.changeWithInputState(event, index)}
        />
      );
    });
  }
}

export default BookList;
