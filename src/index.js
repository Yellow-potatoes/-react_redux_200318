// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入store
import store from './redux/store'
// 引入App组件
import App from './App'
<<<<<<< HEAD
ReactDOM.render(<App store={store}/>,document.getElementById('root'))

// store.subscibe专门用于检测redux中状态的变化，一旦状态变化，就调用subscribe所指定的
=======

ReactDOM.render(<App store={store} />,document.getElementById('root'))

//store.subscribe专门用于检测redux中状态的变化，一旦状态变化，就调用subscribe所指定的回调
>>>>>>> dfdcafd526c452215f35ec365b710adabf9e607a
store.subscribe(()=>{
  ReactDOM.render(<App store={store} />,document.getElementById('root'))
})