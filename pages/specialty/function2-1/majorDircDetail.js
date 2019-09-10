// pages/specialty/function2-1/majorDircDetail.js

const API = require('../../../API/api');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    success: false,
    dircID: '',        //某专业方向的 ID号
    introduction: '',  //某专业方向的 文字介绍
    job: '',           //某专业方向的就业方向 文字介绍
    jobDetails: [],    //某就业方向 工作名+工作内容
  },

  getSpeciality: function(dircID) {
    API.getSpeciality({
      dircID: dircID //传到后台的参数，如果没有参数，则放空
    }).then(res => {

      //console.log(res)    //res是后台返回的数据
      if (res!='') {
        this.setData({
          success: true,
          dircID: dircID,
          introduction: res.introduction,
          job: res.job,
          jobDetails: res.jobDetails,
        })
      } else {
        this.setData({
          success: false
        })
      }

    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSpeciality(options.dircID)
  },

})