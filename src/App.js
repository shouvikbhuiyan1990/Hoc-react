import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hoc from './Hoc';
import withGists from './Gists';

class App extends Component {
  render() {
    const Title = (props) => <h1>{props.children}</h1>
    const AngryTitle = Hoc(Title);
    const Gists = ({ gists }) => (
      <pre>{JSON.stringify(gists, null, 2)}</pre>
    )
    const GistsList = withGists(Gists)
    
    return (
      <div>
        <AngryTitle sample="lol">Whatever</AngryTitle>.
        <GistsList />
      </div>
    );
  }
}


export default App;
