import React, { Component, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Articles from "./components/Articles";
import Slider from "./components/SliderApp/slider";
import Matches from "./components/Football/Matches";
import { serialize, deserialize } from "react-serialize";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderData: this.props.slides
    };
  }
  render() {
    const { slides } = this.props;
    console.log(slides, "AppSlides");
    let Comp;
    switch (window.location.pathname) {
      case "/author":
        Comp = <Articles />;
        break;
      case "/slider":
        Comp = <Slider slides={slides} />;
        break;
      case "/football":
        Comp = <Matches />;
        break;
    }

    return serialize(
      <div className="parent">
        <div className="child">
          <Navbar />
        </div>
        <div className="child">{Comp}</div>
      </div>
    );
  }
}

export default App;
