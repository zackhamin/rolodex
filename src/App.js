import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/cards/cardList.component";
import SearchBox from "./components/search/searchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
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
  }
}

export default App;
