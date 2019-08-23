// pages/spacialty/function3/jobTrend.js

//引入charts.js
let Charts = require('../../../utils/wxcharts.js');

//定义记录初始屏幕宽度比例，便于初始化
let windowW = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 控制按钮弹窗 纯文字介绍
   */
  // job1: function () {
  //   wx.showModal({
  //     title: '职业1',
  //     content: '这是详细介绍',
  //     showCancel: false,
  //     confirmText: '确定',
  //     confirmColor: '#3CC51F',
  //     success: (result) => {
  //       if (result.confirm) { }
  //     },
  //     fail: () => { },
  //     complete: () => { }
  //   });
  // },
  // job2: function () {
  //   wx.showModal({
  //     title: '职业2',
  //     content: '这是详细介绍',
  //     showCancel: false,
  //     confirmText: '确定',
  //     confirmColor: '#3CC51F',
  //     success: (result) => {
  //       if (result.confirm) { }
  //     },
  //     fail: () => { },
  //     complete: () => { }
  //   });
  // },

  job1: function () {
    wx.navigateTo({
      url: '../function3-1/jobTrendDetail',
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 屏幕宽度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth
    });
    console.log(this.data.imageWidth);

    //计算屏幕宽度比列
    windowW = this.data.imageWidth / 375;
    console.log(windowW);

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
    new Charts({
      canvasId: 'canvas1',
      type: 'pie',
      series: [
        { name: '软件开发', data: 20, color: '#A46271' },
        { name: '网页前端', data: 16, color: '#D99FAC' },
        { name: '游戏开发', data: 23, color: '#8D6C77' },
        { name: '交互设计', data: 18, color: '#C6547A' },
        { name: '虚拟现实与增强现实', data: 12 , color: '#D5A7C7' },
        { name: '三维建模及动画', data: 8 , color: '#E699AB' },
        { name: '视频剪辑及后期制作', data: 5 , color: '#CB7693' },
        { name: '影视特效制作    ', data: 10 , color: '#B3A2A6' },
        { name: '平面设计或艺术相关', data: 2 , color: '#7C5D7C' },
      ],
      width: (340 * windowW),
      height: (350 * windowW),
      dataLabel: true,
    });
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