import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';

import './styles/App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = (id) => {
    // Debugging
    // console.log(id);
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        // Debugging Data
        console.log(pokemon);
        this.setState({ pokemon });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick}/>
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}