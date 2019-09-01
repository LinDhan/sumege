// pages/spacialty/function2/majorDirc.js

//读取后台消息的ID
var dircID;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goNext(e) {
    dircID = e.target.id
    if (dircID) {
      wx.navigateTo({
        url: '../function2-1/majorDircDetail?dircID=' + dircID,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }
})