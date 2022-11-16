import React, { Component } from "react";
import ButtonLikeUser from "./ButtonLikeUser";
import ButtonSortUsers from "./ButtonSortUsers";
import ButoonDeleteUser from "./ButtonDeleteUser";
import DisplayUser from "./DisplayUser";

class UsersList extends Component {
  state = {
    users: [
      {
        id: 1,
        firstName: "Tola",
        lastName: "Tolanchik",
        likes: 0,
        isChosen: false,
      },
      {
        id: 2,
        firstName: "Peta",
        lastName: "Tolanchik",
        likes: 0,
        isChosen: false,
      },
      {
        id: 3,
        firstName: "Vasa",
        lastName: "Tolanchik",
        likes: 0,
        isChosen: false,
      },
      {
        id: 4,
        firstName: "Jeka",
        lastName: "Tolanchik",
        likes: 0,
        isChosen: false,
      },
      {
        id: 5,
        firstName: "Alexey",
        lastName: "Tolanchik",
        likes: 1,
        isChosen: false,
      },
    ],
  };
  sortUsers = () => {
    const { users } = this.state;
    this.setState({
      users: users.filter((value) => value.likes > 0),
    });
  };
  likeUser = (userId) => {
    const newUsers = this.state.users.map((user) => {
      const newUser = {
        ...user,
        likes: userId === user.id ? user.likes + 1 : user.likes,
        isChosen: userId === user.id ? !user.isChosen : user.isChosen,
      };
      return newUser;
    });

    this.setState({ users: newUsers });
  };

  deleteUser = (userId) => {
    const userDelete = this.state.users.filter((user) => userId !== user.id);
    this.setState({ users: userDelete });
  };

  render() {
    const { users } = this.state;
    const userLis = users.map((user) => (
      <li key={`${user.id}`}>
        <DisplayUser user={user} />
        <ButtonLikeUser
          likeUser={this.likeUser}
          id={user.id}
          isChosen={user.isChosen}
        />
        <ButoonDeleteUser deleteUser={this.deleteUser} id={user.id} />
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
