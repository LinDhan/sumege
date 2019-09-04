// pages/inquireResult/inquireResult.js

const API = require('../../API/api');

Page({
  data: {
    success: false,
    stuNo: '',
    name: '',
    classNo: '',
    teaName: '',
    teaPhoneNum: '',
    roommate: [],
    dormitory: ''
  },

  getStudentInfo: function(stuNo) {
    API.getStudentInfo(stuNo).then(res => {

      //console.log(res)    //res是后台返回的数据
      if (res!='') {
        this.setData({
          success: true,
          stuNo: stuNo,
          name: res.name,
          classNo: res.classNo,
          teaName: res.teaName,
          teaPhoneNum: res.teaPhoneNum,
          roommate: res.roommate,
          dormitory: res.dormitory
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
  onLoad: function(options) {
    this.getStudentInfo(options.stuNo)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})