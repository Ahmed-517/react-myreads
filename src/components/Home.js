import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const Home = ({books, changeShelf}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf title="Currently Reading" books={books} category="currentlyReading" changeShelf={changeShelf} />
          <Shelf title="Want to Read" books={books} category="wantToRead" changeShelf={changeShelf} />
          <Shelf title="Read" books={books} category="read" changeShelf={changeShelf} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" className="btn">Add a book</Link>
      </div>
    </div>
  )
}

export default Home
