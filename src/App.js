import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './containers/Team';
import PokemonContainer from './containers/PokemonContainer'
import Scouting from './components/Scouting'
import Search from './components/Search'

class App extends Component {

  constructor() {
    super()
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res=>res.json())
      .then(json => this.setState({
        pokemon: json.results
      })
    )
  }



  render() {
    return (
      <div className="App">
        <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
        <Team />
        <Scouting />
        <Search />
        <PokemonContainer pokemon={this.state.pokemon} />
    </div>
    );
  }
}

export default App;
