import React from "react";

export const AppContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 0
    };
  }
  updateInfo = (key, e) => {
    e === "Jemila Al-Ghani" && this.setState({ [key]: 4 });
    e === "technical skills" && this.setState({ [key]: 3 });
    e === "airmoment.live" && this.setState({ [key]: 2 });
    e === "pixelate.top" && this.setState({ [key]: 1 });
    e === "about" && this.setState({ [key]: 0 });
    e === "contact" && this.setState({ [key]: 5 });
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
