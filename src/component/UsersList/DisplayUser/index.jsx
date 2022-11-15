import React, { Component } from "react";

class DisplayUser extends Component {
  render() {
    const {
      user: { firstName, lastName, likes },
    } = this.props;
    return (
      <>
        <p>Firs name : {firstName}</p>
        <p>Last name : {lastName}</p>
        <p>Likes : {likes} </p>
      </>
    );
  }
}

export default DisplayUser;
