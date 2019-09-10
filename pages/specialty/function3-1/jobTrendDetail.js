// pages/specialty/function3-1/jobTrendDetail.js

//引入charts.js
let Charts = require('../../../utils/wxcharts-min.js');

//定义记录初始屏幕宽度比例，便于初始化
let windowW = 0;

//接口
const API = require('../../../API/api');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    success: false,
    jobsID: '',       //某就业方向的 ID号
    jobName: '',      //某就业方向的 名字
    jobProspects: '', //某就业方向的 就业前景
  },

  getEmployment: function(jobsID) {
    API.getEmployment({
      jobsID: jobsID //传到后台的参数，如果没有参数，则放空
    }).then(res => {

      //console.log(res)    //res是后台返回的数据
      if (res!='') {
        this.setData({
          success: true,
          jobsID: jobsID,
          jobName: res.jobName,
          jobProspects: res.jobProspects,
        })
      } else {
        this.setData({
          success: false
        })
      }

      //柱状图
      new Charts({
        canvasId: 'canvas2',
        type: 'column',
        dataPointShape: false,
        categories: [
          '3-5k', '5-8k', 
          '8-9k', '9-10k',
          '10-12k', '12-14k',
          '14k+',
        ],
        series: [{ 
          name: '对应收入人数', 
          data: [ 
            res.salary[0], res.salary[1], 
            res.salary[2], res.salary[3], 
            res.salary[4], res.salary[5], 
            res.salary[6], 
          ], 
          color: '#A15D6C' 
        }],
        yAxis: {
          format: function (val) {
            return val + '人';
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

    })
  },

  //页面跳转事件
  goToLife: function() {
      wx.navigateTo({
        url: '../../society/society',
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //屏幕宽度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth
    });
    //console.log(this.data.imageWidth);

    //计算屏幕宽度比列
    windowW = this.data.imageWidth / 375;
    //console.log(windowW);

    //获取后台数据
    this.getEmployment(options.jobsID)

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

})