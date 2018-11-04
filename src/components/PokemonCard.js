import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor() {
    super()
    this.state = {
      front: true
    }
  }

  handleClick = () => {
    this.setState(state => {
      return {front: !state.front}
    })
  }
  
  render() {
    const { poke } = this.props
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.front ? poke.sprites.front : poke.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {[...poke.stats].reverse()[0].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
