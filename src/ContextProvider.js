import React from "react";

export const AppContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
      unmount: false
    };
  }
  updateInfo = (key, e) => {
    e === "contact" && this.setState({ [key]: 5, unmount: false });
    e === "Jemila Al-Ghani" && this.setState({ [key]: 4, unmount: false });
    e === "technical skills" && this.setState({ [key]: 3, unmount: false });
    e === "airmoment.live" && this.setState({ [key]: 2, unmount: false });
    e === "pixelate.top" && this.setState({ [key]: 1, unmount: false });
    e === "about" && this.setState({ [key]: 0, unmount: false });
  };
  startAni = (key, e) => {
    this.setState({ unmount: true });
    setTimeout(() => {
      this.updateInfo(key, e);
    }, 300);
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          updateInfo: this.updateInfo,
          startAni: this.startAni
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
