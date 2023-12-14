import React, { PureComponent } from 'react';

import Counter from './Counter';
class Player extends PureComponent {
    // state = {  }
    render() { 
        const {id,score,name,index,removePlayer,highestScore,changeScore} = this.props;
        return (
            <div className="player">
              <span className={`player-name`}>
              <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                {name} {score === highestScore && <span className={`${score === highestScore ? 'high-score' : ''}`}>(King)</span>}
              </span>
               <Counter index={index} score = {score}  changeScore={changeScore} />
            </div>
          );
    }
}
export default Player;
