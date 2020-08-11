// 该文件是定义为Count组件服务器的actionCreatetor，专门用于创建Count组件相关的action对象
/**
    同步action 与 异步action
      同步action，是一个一般对象，形如: {type:???,data:???}
      异步action，是一个函数，函数里面可以开启异步任务
      备注: 异步action中一般会调用同步action
 */


import { INCREMENT, DECREMENT } from './countant'
// 创建加的action
export const incrementAction = number => ({ type: INCREMENT, data: number })

// 创建【等一等】再加的action
export const incrementWailAction = number => {
  return (dispatch) => {
    // 这里我们用一个action——incrementAction实现加
    setTimeout(() => {
      // 调用同步action——incrementAction实现加
      dispatch(incrementAction(number))
    }, 500)
  }
}
// 创建减的action
export const decrementAction = number => ({ type: DECREMENT, data: number })