import React from "react";
import "./App.css";
import { thisExpression } from "@babel/types";
import Beer from './components/Beer';

class App extends React.Component {
  state = {
    beers: []
  };

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => res.json())
      .then(data => {
        this.setState({ beers: data });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.beers.map(b => {
          return <Beer beer={b} />;
        })}
      </div>
    );
  }
}

export default App;
