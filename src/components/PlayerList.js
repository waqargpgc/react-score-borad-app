import { Consumer } from "./Context";
import  Player  from './Player';

const PlayerList = ({highestScore}) => {

    return ( 
        <Consumer>
           { context => (
            <>
            { context.players.map( (player, index) => (
                <Player index={index} highestScore={highestScore} key={player.id.toString()}  />
            ))}
            </>
           )}
        </Consumer>
     );
}

export default PlayerList;

