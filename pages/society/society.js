const API = require('../../API/api');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    note1: [],
    note2: [],
    success: false,
    
    boolean: false,
    imgWidth: 0, imgHeight: 0

  },
  //学习文章列表
  getStudyArticlesList: function () {
    API.getStudyArticlesList().then(res => {
      
      console.log(res);    //res是后台返回的数据
      if (res != '') {
        this.setData({
          success: true,
          note1: res
        })
      } else {
        this.setData({
          success: false
        })
      }

    })
  },
  //生活文章列表
  getLifeArticlesList: function () {
    API.getLifeArticlesList().then(res => {

      console.log(res);    //res是后台返回的数据
      if (res != '') {
        this.setData({
          success: true,
          note2: res
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
    this.getStudyArticlesList(options),
    this.getLifeArticlesList(options)
  },

  //跳转到学习详情页
  toStudy: function (e) {
    wx.navigateTo({
      url: 'study/study?study_ID=' + e.currentTarget.dataset.studyid + '&study_title=' + e.currentTarget.dataset.studytitle,
    })
  },
  //跳转到生活详情页
  toLife: function (e) {
    wx.navigateTo({
      url: 'life/life?life_ID=' + e.currentTarget.dataset.lifeid + '&life_title=' + e.currentTarget.dataset.lifetitle,
    })
  },

  //学习生活总页面跳转
  EventHandle: function () {
    var bol = this.data.boolean;
    this.setData({
      boolean: !bol
    })
  }

})