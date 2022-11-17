// components/test/test.js
Component({
    options:{
        styleIsolation:'shared' //组件和页面的结构样式相互影响 （apply—shared就表示页面对组件的单方向影响）
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // max:Number  简化的定义方式
        max:{
            type:Number,
            value:10
        }

    },

    /**
     * 组件的初始数据
     */
    data: {
        count:0,
        n1:0,
        n2:0,
        sum:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addCount() { //事件处理函数
            if(this.data.count >= this.properties.max) return
            this.setData({
                count:this.data.count + 1,
                max: this.properties.max + 1
            })
            this._showCount()
        },
        _showCount() { // 自定义方法，以_开头
            wx.showToast({
                title:'count的值为：' + this.data.count,
                icon:'none'
            })
        },
        getInfo() {
            console.log(this.data)
            console.log(this.properties)
            console.log(this.properties === this.data) // 值为true说明在自定义组件中properties和data是一样的，只不过我们更倾向于用data来存储内部的私有数据，用properties接收外界传递过来的数据
        },
        addN1() {
            this.setData({
                n1:this.data.n1 + 1
            })
        },
        addN2() {
            this.setData({
                n2:this.data.n2 + 1
            })
        },
        
    },
    observers:{
          'n1,n2':function(n1,n2) { // 监听n1,n2的变化，函数的（）中是监听到的变化之后的n1,n2的新值，可以自定义名字，比如newn1,newn2
              this.setData({
                  sum:n1 + n2
              })
          }  
    }
})
