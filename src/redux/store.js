// 该文件是定义redux中最核心的管理者——store

// 引入createStore，用于创建redux中最核心的对象————store
import {createStore,applyMiddleware,combineReducers} from 'redux'
// 引入composeWithDevbTools用于支持浏览器redux调式工具的使用
import {conposeWithDevTools} from 'redux-devtools-extension'
// 引入thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入汇总完的reducer
import reducer from './reducers'

// 调用createStore(xxxReducer)可以生成一个store对象
// 举例说梦，老板在创业之初，就找好了合伙人
//applyMiddleware的作用让store认可异步action的写法
const store = createStore(reducer,applyMiddleware(thunk))

// 暴露store对象
export default store