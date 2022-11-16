// pages/home/home.js
Page({
    
    /**
     * 页面的初始数据
     */
    data: {

    },
    getData() {
        wx.request({
          url: 'https://www.escook.cn/api/get', 
          method:'GET',
          success:(res)=> {
              console.log(res.data)
          }
        })
    },
    postData() {
        wx.request({
          url: 'https://www.escook.cn/api/post',
          method:'POST',
          data:{
              name:'zs',
              age:23
          },
          success:(res)=> {
              console.log(res.data)
          }
        })
    },
    // 编程式导航跳转页面
    //跳转到tapbar页面
    navfunc() {
        wx.switchTab({
          url: '/pages/my/my?name=ls&gender=man',
        })
    },
    // 跳转到非tapbar页面
    gotoIndex() {
        wx.navigateTo({
          url: '/pages/index/index?name=xh&gender=woman',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //如果想要在页面一加载时就获取数据，可以在onload函数当中调用对应的数据请求函数
        this.getData();
        this.postData();

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
        console.log('触发了home页面的下拉事件');
        wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})