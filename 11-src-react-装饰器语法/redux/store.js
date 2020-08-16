// 该文件是定义redux中最核心的管理者——store

// 引入createStore，用于创建redux中最核心的对象————store
import {createStore,applyMiddleware,combineReducers} from 'redux'
// 引入thunk，用于支持异步action
import thunk from 'redux-thunk'
import reducer from './reducers'




// 调用createStore(xxxReducer)可以生成一个store对象
// 举例说明，老板在创业之初，就找好了合伙人.
// appliMiddleware的作用是让store认可异步action的写法
// allReducer是所有的reducer汇总之后的reducer————借助xxx汇总
import {composeWithDevTools} from 'redux-devtools-extension'
					const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

// 暴露store对象
export default store