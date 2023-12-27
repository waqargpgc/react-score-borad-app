import React, { Component } from "react";

const ScoreboardContext = React.createContext();

// export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;

export class Provider extends Component {
  state = {
    players: [
      {
        name: "HAJRA",
        score: 94,
        id: 0,
      },
      {
        name: "IRFAN",
        score: 50,
        id: 1,
      },
      {
        name: "ARSLAN",
        score: 85,
        id: 2,
      },
      {
        name: "HASHIR",
        score: 95,
        id: 3,
      },
      {
        name: "NIMRA",
        score: 80,
        id: 4,
      },
    ],
  };
  handleRemovePlayers = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };
  // handleScoreChange = (index, delta) => {
  //   console.log("Change score called", index, delta);
  //   this.setState({
  //     score: (this.state.players[index].score += delta),
  //   });
  // };
  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      const updatedPlayers = [...prevState.players];
      updatedPlayers[index].score += delta;
      return {
        players: updatedPlayers,
      };
    });
  };
  privPlayerId = 4;
  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.privPlayerId += 1),
          },
          // ...this.state.players,
        ],
      };
    });
  };
  render() {
    return (
      <ScoreboardContext.Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayers,
            addPlayer:this.handleAddPlayer
          },
        }}
      >
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
}
