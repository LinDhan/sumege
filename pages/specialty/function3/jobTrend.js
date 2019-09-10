// pages/specialty/function3/jobTrend.js

//引入charts.js
let Charts = require('../../../utils/wxcharts-min.js');

//定义记录初始屏幕宽度比例，便于初始化
let windowW = 0;

//读取后台消息的ID
var jobsID;

//接口
const API = require('../../../API/api');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  //页面跳转详情页事件
  goNext(e) {
    jobsID = e.target.id
    if (jobsID) {
      wx.navigateTo({
        url: '../function3-1/jobTrendDetail?jobsID=' + jobsID,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },

  //获取饼图的后台信息
  getEmploymentRatio: function() {
    API.getEmploymentRatio().then(res => {

      //console.log(res)    //res是后台返回的数据
      if (res!='') {
        this.setData({
          success: true,
        })
      } else {
        this.setData({
          success: false
        })
      }

      new Charts({
        canvasId: 'canvas1',
        type: 'pie',
        series: [
          { name: '软件开发', data: res[8].ratio, color: '#A46271' },
          { name: '网页前端', data: res[0].ratio, color: '#D99FAC' },
          { name: '交互设计', data: res[1].ratio, color: '#C6547A' },
          { name: '游戏开发', data: res[2].ratio, color: '#8D6C77' },
          { name: '虚拟现实与增强现实', data: res[3].ratio, color: '#D5A7C7' },
          { name: '三维建模及动画', data: res[4].ratio, color: '#E699AB' },
          { name: '视频剪辑及后期制作', data: res[5].ratio, color: '#CB7693' },
          { name: '影视特效制作    ', data: res[6].ratio, color: '#B3A2A6' },
          { name: '平面设计或艺术相关', data: res[7].ratio, color: '#7C5D7C' },
        ],
        width: (340 * windowW),
        height: (350 * windowW),
        dataLabel: true,
      });

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 屏幕宽度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth
    });
    //console.log(this.data.imageWidth);

    //计算屏幕宽度比列
    windowW = this.data.imageWidth / 375;
    //console.log(windowW);

    //获取后台数据
    this.getEmploymentRatio();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

})