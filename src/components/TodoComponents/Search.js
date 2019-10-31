import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            value={this.props.searchTerm}
            onChange={this.props.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;
