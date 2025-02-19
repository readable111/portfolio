
import React, { Component } from "react";
import GlobalContext from "./GlobalContext";

class GlobalProvider extends Component {
  state = {
    user: "Guest",
    isLoggedIn: false
  };

  updateUser = (user: any) => {
    this.setState({ user: user, isLoggedIn: true });
  };

  render() {
    return (
      <GlobalContext.Provider value={{
        user: this.state.user,
        updateUser: this.updateUser,
        isLoggedIn: this.state.isLoggedIn

      }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export { GlobalProvider };
