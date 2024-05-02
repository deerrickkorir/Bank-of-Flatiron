import React from "react";

function Search() {
  return (
    <div className="ui large fluid icon input">
      <label htmlFor="searchInput">Search your Recent Transactions:</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search"
        onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
