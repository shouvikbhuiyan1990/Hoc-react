import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hoc from './Hoc';

class App extends Component {
  render() {
    const Title = (props) => <h1>{props.children}</h1>
    const AngryTitle = Hoc(Title)
    return (
      <div>
        <AngryTitle sample="lol">Whatever</AngryTitle>
      </div>
    );
  }
}


export default App;
