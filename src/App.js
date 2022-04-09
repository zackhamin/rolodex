import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
  }
  } 

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }))
      }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    this.setState(() => { return { searchField }})
  }

  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this
    const searchMonstersResults = monsters.filter((v) => {
      return v.name.toLocaleLowerCase().includes(searchField);
    })



    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Monsters'
        onChange={onSearchChange}/>
       {searchMonstersResults.map((monster) => {
         return <h1 key={monster.id}>{monster.name}</h1>
       })}

      </div>
    );
  }
}

export default App;
