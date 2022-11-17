// components/test2/test2.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    options:{
        pureDataPattern:/^_/
    },

    /**
     * 组件的初始数据
     */
    data: {
        _rgb:{
            r:0,
            g:0,
            b:0
        },
        fullColor:'0,0,0'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        colorAddr() {
            this.setData({
               '_rgb.r':this.data._rgb.r + 5 > 255? 255:this.data._rgb.r + 5 // 为对象的属性赋值需要以'对象名.属性名'的格式写键
            })
        },
        colorAddg() {
            this.setData({
                '_rgb.g':this.data._rgb.g + 5 > 255? 255: this.data._rgb.g + 5
            })
        },
        colorAddb() {
            this.setData({
                '_rgb.b':this.data._rgb.b + 5 > 255? 255: this.data._rgb.b + 5
            })
        },
        _randomColor() {
            this.setData({
                _rgb:{
                    r: Math.floor(Math.random() * 256),
                    g: Math.floor(Math.random() * 256),
                    b: Math.floor(Math.random() * 256)
                }
            })
        }
    },
    observers:{
        '_rgb.r,_rgb.g,_rgb.b':function(newr,newg,newb) {
            this.setData({
                fullColor: `${newr},${newg},${newb}`
            })
        }
    },
    // 组件的生命周期函数
    lifetimes: {

        created() {

        },
        attached() {

        }
    },
    // 组件所在页面的生命周期函数
    pageLifetimes:{
        show:function() { // 页面被展示
            this._randomColor()
        },
        hide:function() {// 页面被隐藏

        },
        resize:function() { //页面尺寸发生变化

        }
    }
})
