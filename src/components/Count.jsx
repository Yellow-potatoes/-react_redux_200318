import React, { Component } from 'react'
<<<<<<< HEAD
import {incrementAction,decrementAction,incrementWailAction} from '../redux/count-actions'
=======
import {incrementAction,decrementAction,incrementWaitAction} from '../redux/count-action'

>>>>>>> dfdcafd526c452215f35ec365b710adabf9e607a

export default class Count extends Component {

  state = {
<<<<<<< HEAD
    // count:0
    school: 'atguigu'
=======
    school: '尚硅谷'
>>>>>>> dfdcafd526c452215f35ec365b710adabf9e607a
  }

  // 加
  increment = () => {
    // 1.获取用户输入
    const { value } = this.refs.selectedNumber
<<<<<<< HEAD
    // 通知redux加value
=======
    // 2.通知redux加value
>>>>>>> dfdcafd526c452215f35ec365b710adabf9e607a
    this.props.store.dispatch(incrementAction(value*1))
  }

  // 减
  decrement = () => {
<<<<<<< HEAD
    //1.获取用户的输入
=======
    // 1.获取用户输入
>>>>>>> dfdcafd526c452215f35ec365b710adabf9e607a
    const { value } = this.refs.selectedNumber
    // 2.通知redux加value
    this.props.store.dispatch(decrementAction(value*1))
  }

<<<<<<< HEAD
  // 当前为奇数，相加
=======
  // 但前求和为奇数，在加
>>>>>>> dfdcafd526c452215f35ec365b710adabf9e607a
  incrementIfOdd = () => {
    if (this.props.store.getState() % 2 !== 0) {
      // 1.获取用户输入
      const { value } = this.refs.selectedNumber
      // 2.通知redux加value
      this.props.store.dispatch(incrementAction(value*1))
    }
  }

<<<<<<< HEAD
  // 等一等再加
  incrementWait = () => {
      // 1.获取用户输入
      const { value } = this.refs.selectedNumber
      // 2.通知redux加value
      this.props.store.dispatch(incrementWailAction(value*1))
=======
  // 等一等在加
  incrementWait = () => {
    
      // 1.获取用户输入
      const { value } = this.refs.selectedNumber
      // 2.通知redux加value
      this.props.store.dispatch(incrementWaitAction(value*1))
   
>>>>>>> dfdcafd526c452215f35ec365b710adabf9e607a
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>{this.state.school}当前求和为: {this.props.store.getState()}</h1>
=======
        <h1>{this.state.school}当前求和: {this.props.store.getState()}</h1>
>>>>>>> dfdcafd526c452215f35ec365b710adabf9e607a
        <select ref="selectedNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
<<<<<<< HEAD
        <button onClick={this.incrementIfOdd}>若和为奇数 +</button>&nbsp;
        <button onClick={this.incrementWait}>等一等 +</button>&nbsp;
=======
        <button onClick={this.incrementIfOdd}>若为奇数 +</button>&nbsp;
        <button onClick={this.incrementWait}>等一个等 +</button>
>>>>>>> dfdcafd526c452215f35ec365b710adabf9e607a
      </div>
    )
  }
}
