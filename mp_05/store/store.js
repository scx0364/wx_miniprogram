import { observable,action} from 'mobx-miniprogram' // 按需导入模块  observable是我们需要用到的模块的名字，记住就可以了
export const store = observable({// 引用observable（）方法，将其挂载到store实例上，并通过export导出（共享）出去
  // 数据字段
  Num1:1,
  Num2:3,
  selectdeIndex:0,
  // 计算属性
  get sum() {
    return this.Num1 + this.Num2
  },
  // 修改store中的值：action函数
  updateNum1:action(function(step) {
    this.Num1 += step
  }),
  updateNum2:action(function(step) {
    this.Num2 += step
  }),
  updateSelectdeIndex:action(function(index) {
    this.selectdeIndex = index
  })

}) 