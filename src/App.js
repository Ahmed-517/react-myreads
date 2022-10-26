import React from "react";
import * as BookAPI from "./BooksAPI";
import Home from "./components/Home";
import Search from "./components/Search";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

class BooksApp extends React.Component {
  state = {
    search: "",
    booksSearch: [],
    books: [],
    showSearchPage: false,
    searchResult: false,
  };

  componentDidMount() {
    BookAPI.getAll().then((res) => {
      this.setState({
        books: res,
      });
    });
  }

  changeShelf = async (book, shelf) => {
    await BookAPI.update(book, shelf);
    await BookAPI.getAll().then((res) => {
      this.setState({
        books: res,
      });
    });
    this.handleBooksSearch(this.state.search)
  };

  handleSearch = async (event) => {
    await this.setState({
      search: event.target.value,
    });
    this.handleBooksSearch(this.state.search);
    console.log(this.state.search);
  };

  handleBooksSearch = async (search) => {
    
    await BookAPI.search(search).then((res) => {
        if (res && !res.error) {
        this.setState({
          booksSearch: res.map((searchBooks)=>{
            this.state.books.forEach((book)=>{
              if (searchBooks.id === book.id) searchBooks.shelf = book.shelf;
            })
            return searchBooks;
          }),
          searchResult: true
        });
      } else {
        this.setState({
          searchResult: false
        });
      }
      });

    console.log('Search')
    console.log(this.state.booksSearch)

  };

  render() {
    return (
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/search"
              element={
                <Search
                  handleSearch={this.handleSearch}
                  search={this.state.search}
                  booksSearch={this.state.booksSearch}
                  changeShelf={this.changeShelf}
                  searchResult={this.state.searchResult}
                />
              }
            />
            <Route
              path="/"
              element={
                <Home books={this.state.books} changeShelf={this.changeShelf} />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
