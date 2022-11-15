import React, { Component } from "react";

class ButtonLikeUser extends Component {
  render() {
    const { likeUser, id, isChosen } = this.props;
    return (
      <>
        <button onClick={() => likeUser(id)} disabled={isChosen}>
          Like
        </button>
      </>
    );
  }
}

export default ButtonLikeUser;
