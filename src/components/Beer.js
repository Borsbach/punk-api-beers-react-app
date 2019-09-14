import React, { Component } from 'react';

class Beer extends Component {
  render() {
    return (
      <div>
        <p>Beer ID: {this.props.beer.id}</p>
        <p>{this.props.beer.name}</p>
        <p>First brewed in {this.props.beer.first_brewed}</p>
        <p>{this.props.beer.description}</p>
        <p>{this.props.beer.tagline}</p>
        <p>{this.props.beer.image_url}</p>
      </div>
    )
  }
}

export default Beer
