import React, { Component } from "react";
import Book from "./Book";

export default class ShelfSearch extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.searchResult
            ? this.props.booksSearch.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  changeShelf={this.props.changeShelf}
                />
              ))
            : ""}
        </ol>
      </div>
    );
  }
}
