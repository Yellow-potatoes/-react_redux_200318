// 引入常量名称
import {ADD_PERSON} from '../constant'
// 定义人的状态
const inistate = [{id:'001',name:'海峰老师',age:18}]

function personReducer (preState=inistate,action){
  const {type,data} = action
  switch (type) {
    case ADD_PERSON:
      return [data,...preState]
    default:
      return preState
  }
}
export default personReducer