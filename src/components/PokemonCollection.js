import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1> */}
        {
          this.props.pokemon.length !== 0 ? this.props.pokemon.map(poke => <PokemonCard key={poke.id} poke={poke} />) : null
        }
      </Card.Group>
    )
  }
}

export default PokemonCollection
