import React, { Component } from "react";
import { Consumer } from "./Context";

class AddPlayerForm extends Component {
  render() {
    return (
      <Consumer>
        {(context) => {
          const playerInput = React.createRef();
          const handleSubmit = (e) => {
            e.preventDefault();
            context.actions.addPlayer(playerInput.current.value);
            e.currentTarget.reset();
          };
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                ref={playerInput}
                placeholder="Enter a player s name"
                required
              />
              <input type="submit" value="Add Player" />
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default AddPlayerForm;
