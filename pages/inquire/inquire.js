// pages/inquire/inquire.js

var stuNo;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  stuNoInput(e){
    stuNo=e.detail.value
  },
  inquire(){
    wx.navigateTo({
      url: '../inquireResult/inquireResult?stuNo='+stuNo,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})