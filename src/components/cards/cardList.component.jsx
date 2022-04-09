import { Component } from "react";
import "./card-list.styles.css";
import "./card.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <div key={monster.id} className="card-container">
              <img
                alt={`monster ${monster.name}`}
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              />
              <h2>{monster.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
