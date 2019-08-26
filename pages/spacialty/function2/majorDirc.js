// pages/spacialty/function2/majorDirc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  /**
   * 控制按钮弹窗 纯文字介绍
   */
  dirc1: function () {
    wx.showModal({
      title: '专业方向1',
      content: '这是详细介绍',
      showCancel: false,
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if (result.confirm) { }
      },
      fail: () => { },
      complete: () => { }
    });
  },
  dirc2: function () {
    wx.showModal({
      title: '专业方向2',
      content: '这是详细介绍',
      showCancel: false,
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if (result.confirm) { }
      },
      fail: () => { },
      complete: () => { }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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