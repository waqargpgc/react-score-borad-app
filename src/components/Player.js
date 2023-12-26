import React, { PureComponent } from 'react';
import Counter from './Counter';
import { Consumer } from './Context';
class Player extends PureComponent {
    // state = {  }
    render() { 
        const {index,highestScore} = this.props;
        return (
          <Consumer>
            { context => (
              <div className="player">
              <span className={`player-name`}>
              <button className="remove-player" onClick={() => context.actions.removePlayer(context.players[index].id)}>✖</button>
                {context.players[index].name} {context.players[index].score === highestScore && <span className={`${context.players[index].score === highestScore ? 'high-score' : ''}`}>(King)</span>}
              </span>
               <Counter index={index} score = {context.players[index].score} />
              </div>
            )}
          </Consumer>
            
          );
    }
}
export default Player;
