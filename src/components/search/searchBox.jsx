import { Component } from "react";
import "./searchbox.css";

const SearchBox = ({ onChangeHandler, searchMonsters, className }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={searchMonsters}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
