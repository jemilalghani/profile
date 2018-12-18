import React from "react";

export const AppContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  updateInfo = (key, e) => {
    e === "Jemila Al-Ghani" && this.setState({ [key]: 4 });
    e === "technical skills" && this.setState({ [key]: 3 });
    e === "airmoment.live" && this.setState({ [key]: 2 });
    e === "pixelate.top" && this.setState({ [key]: 1 });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          updateInfo: this.updateInfo
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
