import "./App.css";
import CardList from "./components/cards/cardList.component";
import SearchBox from "./components/search/searchBox";
import { useState, useEffect, ChangeEvent } from "react";
import { getData } from "./utils/fetch";

export interface Monster {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
