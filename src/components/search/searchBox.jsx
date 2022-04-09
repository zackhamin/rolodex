import { Component } from "react";
import "./searchbox.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, searchMonsters, className } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={searchMonsters}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
