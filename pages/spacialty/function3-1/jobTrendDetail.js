// pages/spacialty/function3-1/jobTrendDetail.js

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
    //柱状图
    new Charts({
      canvasId: 'canvas2',
      type: 'column',
      dataPointShape: false,
      categories: [
        '2016', 
        '2017', 
        '2018', 
        '2019',
        '2020',
      ],
      series: [
        { name: '收入', data: [ 6.8, 6.6, 7.4, 8.4, 7.8 ], color: '#A15D6C' }
      ],
      yAxis: {
        format: function (val) {
          return val + '千';
        }
      },
      xAxis: {
        disableGrid: true,
      },
      extra: {
        column: {
        width: 25 //柱的宽度
        }
      },
      width: (340 * windowW),
      height: (350 * windowW),
      name: '这是标题',
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