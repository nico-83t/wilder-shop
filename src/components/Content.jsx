import React, { Component } from 'react'
import Header from './Header/Header';
import Cards from './cards/Cards';

const baseUrl = `http://api.brewerydb.com/v2/beers/?key=${process.env.REACT_APP_TEXT_TO_SPEECH_API_KEY}`

export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      glass:[]

    }
  }

  componentDidMount() {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((response) => this.setState({ glass: response.data }))
      .catch((error) => console.log(error))
  }  

  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <Cards />
      </div>
    )
  }
}
