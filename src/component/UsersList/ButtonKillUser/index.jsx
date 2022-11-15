import React, { Component } from "react";

class ButoonKillUser extends Component {
  render() {
    const { id, deleteUser } = this.props;
    return <button onClick={() => deleteUser(id)}>Kill My</button>;
  }
}

export default ButoonKillUser;
