import React, { Component } from 'react'
import {incrementAction,decrementAction,incrementWaitAction} from '../redux/count-action'


export default class Count extends Component {

  state = {
    school: '尚硅谷'
  }

  // 加
  increment = () => {
    // 1.获取用户输入
    const { value } = this.refs.selectedNumber
    // 2.通知redux加value
    this.props.store.dispatch(incrementAction(value*1))
  }

  // 减
  decrement = () => {
    // 1.获取用户输入
    const { value } = this.refs.selectedNumber
    // 2.通知redux加value
    this.props.store.dispatch(decrementAction(value*1))
  }

  // 但前求和为奇数，在加
  incrementIfOdd = () => {
    if (this.props.store.getState() % 2 !== 0) {
      // 1.获取用户输入
      const { value } = this.refs.selectedNumber
      // 2.通知redux加value
      this.props.store.dispatch(incrementAction(value*1))
    }
  }

  // 等一等在加
  incrementWait = () => {
    
      // 1.获取用户输入
      const { value } = this.refs.selectedNumber
      // 2.通知redux加value
      this.props.store.dispatch(incrementWaitAction(value*1))
   
  }

  render() {
    return (
      <div>
        <h1>{this.state.school}当前求和: {this.props.store.getState()}</h1>
        <select ref="selectedNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>若为奇数 +</button>&nbsp;
        <button onClick={this.incrementWait}>等一个等 +</button>
      </div>
    )
  }
}
