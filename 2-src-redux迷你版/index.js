// 引入React核心库
import React from 'react'
// 引入ReactDOM库
import ReactDOM from 'react-dom'
// 引入App组件
import App from './App'
// 引入store
import store from './redux/store'
ReactDOM.render(<App/>,document.getElementById('root'))

//store.subscribe专门用于检测redux中状态的变化，一旦状态变化，就调用subscribe所指定的回调
store.subscribe(()=>{
  ReactDOM.render(<App/>,document.getElementById('root'))
})