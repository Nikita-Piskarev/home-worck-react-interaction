import React, { Component } from "react";

class DisplayUser extends Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <p>Firs name : {user.firstName}</p>
        <p>Last name : {user.lastName}</p>
        <p>Likes : {user.likes} </p>
      </>
    );
  }
}

export default DisplayUser;
