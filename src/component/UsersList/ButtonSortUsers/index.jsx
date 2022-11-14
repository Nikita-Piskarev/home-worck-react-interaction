import React, { Component } from "react";

class ButtonSortUsers extends Component {
  render() {
    const { sortUsers } = this.props;
    return <button onClick={sortUsers}> sort </button>;
  }
}

export default ButtonSortUsers;
