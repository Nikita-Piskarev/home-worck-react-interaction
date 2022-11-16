import React, { Component } from "react";

class ButoonDeleteUser extends Component {
  render() {
    const { id, deleteUser } = this.props;
    return <button onClick={() => deleteUser(id)}>Delete User</button>;
  }
}

export default ButoonDeleteUser;
