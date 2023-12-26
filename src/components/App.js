import React, { Component  } from 'react';
import { Provider } from './Context';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';
  class App extends Component {
    state = {
      players : [
        {
          name: "HAJRA",
          score: 94,
          id: 0
        },
        {
          name: "IRFAN",
          score: 50,
          id: 1
        },
        {
          name: "ARSLAN",
          score: 85,
          id: 2
        },
        {
          name: "HASHIR",
          score: 95,
          id: 3
        },
        {
          name: "NIMRA",
          score: 80,
          id: 4
        }
      ]
    };
    handleRemovePlayers = (id) => {
      debugger
      this.setState( prevState => {
        return {
          players : prevState.players.filter(p => p.id !== id)
        }
      })
    }
    handleScoreChange = (index,delta) => {
      console.log('Change score called', index, delta);
      this.setState({
          score : this.state.players[index].score += delta
      })
    }
    getHighestScore() {
      return Math.max(...this.state.players.map((player) => player.score), 0);
    }
  
    privPlayerId = 4
    handleAddPlayer = (name) => {
      this.setState( prevState => {
        return {
        players:[
          ...prevState.players,
          {
          name,
          score:0,
          id:this.privPlayerId += 1
          },
          // ...this.state.players,
        ]
       }
      })
    }
    render () {
      const highestScore = this.getHighestScore();
      return (
        <Provider value={{
          players: this.state.players,
          actions: {
            changeScore : this.handleScoreChange,
            removePlayer: this.handleRemovePlayers
          }
        }}>
          <div className="scoreboard">
          <Header />    
            <PlayerList highestScore={highestScore} />
            <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
        </Provider>
      );
  }
  
};

export default App;
