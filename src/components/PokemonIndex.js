import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      pokemon: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokemon => this.setState({pokemon}))
  }

  onSearchChange = (event, data) => {
    this.setState({search: data.value})
  }

  getPokemon = () => {
    return this.state.pokemon.filter(poke => {
      return poke.name.includes(this.state.search)
    })
  }

  addPokemon = (poke) => {
    this.setState(state => {
      return {pokemon: [...state.pokemon, poke]}
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.onSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.getPokemon()} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
