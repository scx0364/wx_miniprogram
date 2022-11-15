// index.js
// 获取应用实例
const app = getApp()

Page({
 data: {
     info:'hello world',
     imgSrc:'http://www.itheima.com/images/logo.png',
     random1:Math.random()*10,
     random2:Math.random().toFixed(2),
     count:0,
     msg:'hello',
     type:1,
     flag:true,
     arr1:['affeer','disable','creat'],
     userData:[
         {id:1,name:'chole'},
         {id:2,name:'gracy'},
         {id:3,name:'tom'}
     ],
     query:{} // 接收页面跳转携带的参数
 },
//  事件处理函数
btnTouchHandler(e) {
    console.log(e)
},
dataChange() {
    this.setData({
        count:this.data.count + 1
    })
},
btnTap(e) {
    // console.log(e);
    // console.log(e.target.dataset.info);
    this.setData({
        count:this.data.count + e.target.dataset.info
        
    });
    
},
// 文本框处理函数
iptHandler(e) {
    //e.detail.value可以获取当前文本框中最新的内容，修改内容时e.detail.value的值也会实时发生变化
    // console.log(e.detail.value);
    this.setData({
        msg:e.detail.value
    })

},
//编程式导航后退
goback() {
    wx.navigateBack({
      delta: 1, //1时可以省略
    })
},
/**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options);
        this.setData({
            query:options
        })
    },

})
 
