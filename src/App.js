import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0,
    message: 'Click an Image to Begin'
  };

  newGame = () => {
    this.setState({ score: 0 });
    this.state.cards.forEach(card => { card.count = 0; })
  }

  cardClicked = id => {
    this.state.cards.find((cardToMatch, i) => {
      if (cardToMatch.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1, message: "Correct!" }, function () {
            if (this.state.score > this.state.highscore) {
              this.setState({ highscore: this.state.score });
              if (this.state.score === 12) this.setState({ message: "You Win!" });
            };
          });
          this.state.cards.sort(() => Math.random() - .5)
          return true;
        } else {
          this.setState({ message: "You Lose!" });
          this.newGame();
          return false;
        }
      } return null;
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header
          score={this.state.score}
          highscore={this.state.highscore}
          message={this.state.message}
        >
          Clicky Game
        </Header>
        <div className="container">
          {this.state.cards.map(card => (
            <Card
              cardClicked={this.cardClicked}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;