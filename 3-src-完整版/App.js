import React, { Component } from 'react'
import Count from './components/Count'
export default class App extends Component {
  render() {
    console.log(this.props)
    const {store} = this.props
    return (
      <div>
        <Count store={store} />
      </div>
    )
  }
}
