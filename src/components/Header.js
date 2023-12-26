import Stats from "./Stats";
import Stopwatch from "./Stopwatch";
const Header = () => {
    return (
      <header>
        <Stats />
        <h1>QA Scoreboard</h1>
        <Stopwatch />
      </header>
    );
  };

  export default Header;