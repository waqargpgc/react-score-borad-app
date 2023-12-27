import { Consumer } from "./Context";
import  Player  from './Player';

const PlayerList = () => {

    return ( 
        <Consumer>
           { context => (
            <>
            { context.players.map( (player, index) => (
                <Player index={index} key={player.id.toString()}  />
            ))}
            </>
           )}
        </Consumer>
     );
}

export default PlayerList;

