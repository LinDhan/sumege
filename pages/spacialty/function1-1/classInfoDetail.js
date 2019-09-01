// pages/spacialty/function1-1/classInfoDetail.js

//接口
const API = require('../../../API/api');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    success: false,
    gradeID: '',  //年级
    course: [],   //课程(名称+软件+编程语言+课程介绍+其他信息等)
  },

  getCourses: function(gradeID) {
    API.getCourses({
      gradeID: gradeID //传到后台的参数，如果没有参数，则放空
    }).then(res => {

      console.log(res)    //res是后台返回的数据
      if (res!='') {
        this.setData({
          success: true,
          gradeID: gradeID,
          course: res,
          // label: res.label,
          // introduction: res.introduction
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
    this.getCourses(options.gradeID)
  },

})