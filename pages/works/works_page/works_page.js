const app = getApp();
const txvContent = requirePlugin("tencentVideo");
Page({

  /**
   * 页面的初始数据
   *works_page_imgUrl为作品图片链接，
   */

  data: {
      works_page_type: "",
      works_page_text: "",
      works_page_videoSrc: "",
      works_page_imgSrc:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '作品',
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   * 调用works页面修改好的全局变量
   * 并赋值给当前页面的局部变量
   */
  onShow: function () {
      this.setData({
          works_page_type: app.globalData.works_type,
          works_page_text: app.globalData.works_text, 
          works_page_videoSrc: app.globalData.works_videoSrc,
        works_page_imgSrc: app.globalData.works_imgSrc,
      })
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
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})