import React, { Component } from "react";
import ButtonLikeUser from "./ButtonLikeUser";
import ButtonSortUsers from "./ButtonSortUsers";
import DisplayUser from "./DisplayUser";

class UsersList extends Component {
  state = {
    users: [
      { id: 1, firstName: "Tola", lastName: "Tolanchik", likes: 0 },
      { id: 2, firstName: "Peta", lastName: "Tolanchik", likes: 0 },
      { id: 3, firstName: "Vasa", lastName: "Tolanchik", likes: 0 },
      { id: 4, firstName: "Jeka", lastName: "Tolanchik", likes: 0 },
      { id: 5, firstName: "Alexey", lastName: "Tolanchik", likes: 1 },
    ],
  };
  sortUsers = () => {
    const { users } = this.state;
    this.setState({
      users: users.filter((value) => value.likes > 0),
    });
  };
  likeUser = () => {
    const [{ likes }] = this.state.users;
    const newState = {
      likes: likes + 1,
    };
    this.setState([{ likes: likes + 1 }]);
    console.log(likes);
  };

  render() {
    const { users } = this.state;
    const userLis = users.map((user) => (
      <li key={`${user.id}`}>
        <DisplayUser user={user} />
        <ButtonLikeUser likeUser={this.likeUser} />
      </li>
    ));

    return (
      <>
        {userLis}
        <ButtonSortUsers sortUsers={this.sortUsers} />
      </>
    );
  }
}

export default UsersList;
