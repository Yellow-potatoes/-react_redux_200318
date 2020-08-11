import React, { Component } from 'react'
import Count from './components/Count'
export default class App extends Component {
  render() {
<<<<<<< HEAD
    const {store} = this.props
    return (
      <div>
        <Count store={store}/>
=======
    console.log(this.props)
    const {store} = this.props
    return (
      <div>
        <Count store={store} />
>>>>>>> dfdcafd526c452215f35ec365b710adabf9e607a
      </div>
    )
  }
}
