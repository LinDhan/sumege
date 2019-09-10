// pages/specialty/function1/classInfo.js

//控制年级变量 大一为1，大二为2，以此类推
var gradeID;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goNext(e) {
    gradeID = e.target.id
    if (gradeID) {
      wx.navigateTo({
        url: '../function1-1/classInfoDetail?gradeID=' + gradeID,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})