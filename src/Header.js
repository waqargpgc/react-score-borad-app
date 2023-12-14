import Stats from "./Stats";
import Stopwatch from "./Stopwatch";
const Header = ({totalPlayers,title}) => {
    return (
      <header>
        <Stats players={totalPlayers} />
        <h1>{title}</h1>
        <Stopwatch />
      </header>
    );
  };

  export default Header;