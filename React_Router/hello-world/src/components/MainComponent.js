import React, { Component } from "react";
import BookList from "./lists/BookList";
import bookList from "../assets/books";
import NewBook from "./representational/NewBook";
import { Route, NavLink, Switch } from "react-router-dom";
import BookDetail from "./representational/BookDetail";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: bookList,
      selectedBook: null,
    };
  }

  selectedBookHandler = (bookID) => {
    const book = this.state.books.filter((book) => book.id === bookID)[0];
    this.setState({
      selectedBook: book,
    });
  };

  render() {
    const books = (
      <BookList
        books={this.state.books}
        selectedBookHandler={this.selectedBookHandler}
      />
    );

    return (
      <div className="App">
        <nav className="nav-bar">
          <ul>
            <li>
              {/* <a href="/">Home</a> */}
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/new-book">New Book</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact render={() => books} />
          <Route path="/new-book" exact component={NewBook} />
          <Route
            path="/:id"
            render={() => <BookDetail book={this.state.selectedBook} />}
          />
        </Switch>
        {/* Switch will always call the first match */}
        {/* it is possible to keep some route out of switch */}
      </div>
    );
  }
}

export default MainComponent;
