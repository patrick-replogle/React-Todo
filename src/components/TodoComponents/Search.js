import React from "react";

const Search = props => {
  return (
    <div>
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={props.searchTerm}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
