import React, { Component } from "react";
import Book from "../representational/Book";

class BookList extends Component {
  constructor(props) {
    super(props);
    console.log("BookList constructor");
  }

  componentDidMount() {
    console.log("BookList componentDidMount!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Updated BookList shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("Updated BookList componentDidUpdate");
  }

  //   UNSAFE_componentWillMount() {
  //     console.log("BookList componentWillMount!");
  //   }

  //   UNSAFE_componentWillReceiveProps(nextProps) {
  //     console.log("Updated BookList componentWillReceiveProps", nextProps);
  //   }

  //   UNSAFE_componentWillUpdate(nextProps, nextState) {
  //     console.log("Updated BookList componentWillUpdate");
  //   }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("BookList getDerivedStateFromProps", nextProps, prevState);
    return prevState;
  }

  //   alternate of will update
  getSnapshotBeforeUpdate() {
    console.log("Update BookList getSnapshotBeforeUpdate");
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
