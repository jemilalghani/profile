import React from "react";

export const AppContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
      unmount: false,
      dropdown: false
    };
  }
  updateInfo = (key, e) => {
    e === "contact" && this.setState({ [key]: 5, unmount: false });
    e === "technologies" && this.setState({ [key]: 3, unmount: false });
    e === "Technologies" && this.setState({ [key]: 3, unmount: false });
    e === "airmoment.live" && this.setState({ [key]: 2, unmount: false });
    e === "Project[airmoment.live]" &&
      this.setState({ [key]: 2, unmount: false });
    e === "pixelate.top" && this.setState({ [key]: 1, unmount: false });
    e === "Project[pixelate.top]" &&
      this.setState({ [key]: 1, unmount: false });
    e === "about" && this.setState({ [key]: 0, unmount: false });
  };
  info = key => {
    setTimeout(() => {
      this.setState(prevState => {
        return { [key]: !prevState[key] };
      });
    }, 300);
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
          startAni: this.startAni,
          info: this.info
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
