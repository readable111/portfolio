
import React, { Component } from "react";
import GlobalContext from "./GlobalContext";

class GlobalProvider extends Component {
  state = {
    user: sessionStorage.getItem("accessToken") || "Guest",
    isLoggedIn: !!sessionStorage.getItem("accessToken")
  };

  updateUser = (user: any) => {
    if (user) {
      sessionStorage.setItem("accessToken", user);
      this.setState({ user, isLoggedIn: true });
    } else {
      sessionStorage.removeItem("accessToken");
      this.setState({ user: "Guest", isLoggedIn: false });
    }
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
