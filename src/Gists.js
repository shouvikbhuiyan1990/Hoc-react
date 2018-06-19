import React, { Component } from 'react';

export default (PassedComponent) =>
class WithGists extends Component {
  state = {
    gists: []
  }
  componentDidMount() {
    fetch("https://api.github.com/gists/public")
    .then((r) => r.json())
    .then((gists) => this.setState({
      gists: gists
    }))
  }
  render() {
    return (
      <PassedComponent
        {...this.props}
        gists={this.state.gists}
      />
    )
  }
}