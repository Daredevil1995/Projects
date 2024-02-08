import React, { Component, useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import Articles from './components/Articles';
//import Slider from './components/slider';


class App extends Component {

  render() {
    let Comp
    switch (window.location.pathname){
      case "/sort":
        Comp=<Articles/>
        break;
        case "slider":
          break
    }
    
    
    
    //const [tab,setTab] = useState("");
    return (
      
    <div className="parent">
      <div className="child">
      <Navbar/>
      </div>
      <div className="child">
       {Comp}
      </div>
      </div>
    );
  }
}

export default App;
