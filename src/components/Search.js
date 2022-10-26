import React from "react";
import { Link } from "react-router-dom";
import ShelfSearch from "./ShelfSearch";

const Search = ({ handleSearch, search, booksSearch, changeShelf, searchResult }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        {/* <button className="close-search">Close</button> */}
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleSearch}
          />
        </div>
      </div>
      
      <ShelfSearch booksSearch={booksSearch} changeShelf={changeShelf} searchResult={searchResult} />

    </div>
  );
};

export default Search;
