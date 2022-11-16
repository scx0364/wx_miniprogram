// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:{},
    shopList:[], // 所有商铺信息
    page:1, // 请求第几页
    pageSize:10,  //每页最多几条数据
    total:0, // 每一个分类下的所有数据条数总和
    isloading:false // 节流阀
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //将携带的参数赋值给title
    this.setData({
        title:options
    })
    // console.log(this.data.title.id)
    this.getShopList()
  },
  // 请求数据函数
  getShopList(cb) {
      this.setData({
          isloading:true
      })
      // 显示页面loading效果
      wx.showLoading({
        title: '页面加载中...',
      })
      wx.request({
        url: 'https://www.escook.cn/categories/'+this.data.title.id+'/shops',
        method:'GET',
        data:{
            _page:this.data.page,
            _limit:this.data.pageSize
        },
        success:(res)=> {
            this.setData({
                shopList:[...this.data.shopList,...res.data],
                total:res.header['X-Total-Count'] - 0
            })
            console.log(this.data.shopList)
            console.log(this.data.total)
        },
        // 隐藏页面loading效果
        complete: () => {
            wx.hideLoading()
            this.setData({
                isloading:false
            })
            cb&&cb()
            
        }

      })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   wx.setNavigationBarTitle({
     title: this.data.title.title,
   })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 需要重置关键的数据
    this.setData({
      page: 1,
      shopList: [],
      total: 0
    })
    // 重新发起数据请求
    this.getShopList(() => {
      wx.stopPullDownRefresh() 
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.page * this.data.pageSize >= this.data.total) {
      // 证明没有下一页的数据了
      return wx.showToast({
        title: '数据加载完毕！',
        icon: 'none'
      })
    }
    // 判断是否正在加载其他数据
    if (this.data.isloading) return
    // 页码值 +1
    this.setData({
      page: this.data.page + 1
    })

    // 获取下一页数据
    this.getShopList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})