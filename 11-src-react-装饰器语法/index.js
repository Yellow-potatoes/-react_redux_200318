// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入store
import store from './redux/store'
// 引入Provider,给所有的App子组件提供: store
import {Provider} from 'react-redux'
// 引入App组件
import App from './App'


  ReactDOM.render(
  <Provider store={store} >
    <App/>
  </Provider>,
  document.getElementById('root')
  )