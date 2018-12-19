import React, { Component } from "react";
import Header from "./Header";
import Pixelate from "./Slides/Pixelate";
import Moment from "./Slides/Moment";
import withContext from "./Context_HOC";
import Resume from "./Slides/Resume";
import Tech from "./Slides/Tech";
import Home from "./Slides/Home";
import Contact from "./Slides/Contact";
import "./reset.css";
import "./App.css";

class App extends Component {
  render() {
    let array = [
      <Home />,
      <Pixelate />,
      <Moment />,
      <Tech />,
      <Resume />,
      <Contact />
    ];
    return (
      <div className="App">
        <Header />
        <div className="selected">
          {this.props.context
            ? array[this.props.context.selected]
            : "loading..."}
        </div>
      </div>
    );
  }
}

export default withContext(App);
