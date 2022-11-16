// pages/contact/contact.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 随机颜色数组
        colorList:[],
        isLoading:false
    },
    // 获取随机颜色的方法
    getColor() {
        this.setData({
            isLoading:true
        })
        wx.showLoading({
          title: '页面加载中...',
        })
        wx.request({
          url: 'https://www.escook.cn/api/color',
          method:'GET',
          success:({data:res}) => { //结构赋值  {data:res}表示将对象res解构，取出其中的data属性，将其重命名为res
            // console.log(res)
              this.setData({
                  colorList: [...this.data.colorList, ...res.data]  //扩展运算符合并数组
                  
              })
            console.log(this.data.colorList)
        
          },
         complete:()=> {
            wx.hideLoading()
            this.setData({
                isLoading:false
            })
         }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getColor() // 调用函数时，一定要加this
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if(this.data.isLoading) return
        this.getColor()
        
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})