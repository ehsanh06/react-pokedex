import React, { Component } from 'react';
import DetailView from './DetailView';
import PokeList from './PokeList';

import './styles/App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {};

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = (id) => {
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick}/>
        <DetailView />
      </div>
    );
  }
}