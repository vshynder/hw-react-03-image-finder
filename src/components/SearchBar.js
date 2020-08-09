import React from "react";

class SearchBar extends React.Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form
          onSubmit={(e) =>
            this.props.search(e, this.state.query.split(" ").join("+"))
          }
          className="SearchForm"
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            onChange={this.handleChange}
            type="text"
            placeholder="Search images and photo"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
