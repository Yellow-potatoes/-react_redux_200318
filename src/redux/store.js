// 该文件是定义redux中最核心的管理者————store

// 引入createStore，用于创建redux中最核心的对象——————store
import {createStore, applyMiddleware} from 'redux'
// 引入countReducer,用于加工Count组件的状态
import countReducer from './count-reducer'
// 引入thunk，用于支持异步aciton
import thunk from 'redux-thunk'

// 调用createStore(xxxReducer)可以生成一个store对象
// 举例说明，老板在创业之初，就找好了合伙人
const store = createStore(countReducer,applyMiddleware(thunk))

// 暴露store对象
export default store