import React, { Component } from "react";

class ButtonLikeUser extends Component {
  render() {
    const { likeUser } = this.props;
    return (
      <>
        <button onClick={likeUser}> Like </button>
      </>
    );
  }
}

export default ButtonLikeUser;
