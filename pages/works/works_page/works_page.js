const txvContent = requirePlugin("tencentVideo");
const API = require('../../../API/api');
Page({

  /**
   * 页面的初始数据
   *works_page_imgUrl为作品图片链接，
   */

  data: {
      works_title: "",
      works_cover: "",
      works_author: "",
      works_authorGrade: "",
      works_authorDomain: "",
      works_video: "",
      works_images: "",
      works_introduction: ""
  },

 
  getWorkDetails: function (works_ID){
    API.getWorkDetails(works_ID).then(res => {
      if (res!=''){
        this.setData({
          works_title: res.title,
          works_cover: res.cover,
          works_author: res.author,
          works_authorGrade: res.authorGrade,
          works_authorDomain: res.authorDomain,
          works_video: res.video,
          works_images: res.images,
          works_introduction: res.introduction
        })
      }
      else{
        return false
      }
    })
  },

  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    
    wx.setNavigationBarTitle({
      title: options.works_title,
    })
    this.getWorkDetails(options.works_ID)
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