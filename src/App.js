import "./App.css";
import CardList from "./components/cards/cardList.component";
import SearchBox from "./components/search/searchBox";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const searchMonstersResults = monsters.filter((v) => {
    return v.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <SearchBox
        onChangeHandler={onSearchChange}
        searchMonsters={"Search Monsters"}
        className={"monster-search"}
      />
      <CardList monsters={searchMonstersResults} />
    </div>
  );
};

export default App;
