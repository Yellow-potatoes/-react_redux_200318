// 引入react核心库
import React,{Component} from 'react'
// 引入connet，用于连接
import {connect} from 'react-redux'
// 引入actionCreator
import {
  incrementAction,
  decrementAction,
  incrementWaitAction
} from '../redux/actions/count'


// 定义Count的UI组件
@connect(
  // state是redux中的状态对象
  state => ({
    count:state.count,
    persons:state.persons
  }),
  {
    increment:incrementAction,
    decrement:decrementAction,
    incrementWait:incrementWaitAction,
  }
)
class Count extends Component {

  state = {
    // count:0
    school: '尚硅谷'
  }

  // 加
  increment = () => {
    // 1.获取用户输入
    const { value } = this.refs.selectedNumber
    // 2.通知redux加value
    this.props.increment(value * 1)
  }

  // 减
  decrement = () => {
    //1.获取用户的输入
    const { value } = this.refs.selectedNumber
    // 2.通知redux加value
    this.props.decrement(value * 1)
  }

  // 当前为奇数，相加
  incrementIfOdd = () => {
    if (this.props.count % 2 !== 0) {
      // 1.获取用户输入
      const { value } = this.refs.selectedNumber
      // 2.通知redux加value
      this.props.increment(value*1)
    }
  }

  // 等一等再加
  incrementWait = () => {
    // 1.获取用户输入
    const { value } = this.refs.selectedNumber
    // 2.通知redux加value
    this.props.incrementWait(value*1)
  }

  render() {
    return (
      <div>
        <h1>{this.state.school}-当前求和为:<span style={{color:'red'}} >{this.props.count}</span>
        下方组件总人数为: <span style={{color:'hotpink'}} >{this.props.persons.length}</span>
        </h1>
        <select ref="selectedNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>若和为奇数 +</button>&nbsp;
        <button onClick={this.incrementWait}>等一等 +</button>&nbsp;
      </div>
    )
  }
}

// 暴露connect()()生成的容器组件
export default Count
