/* 
  pages/works/works.js
  作品分享
  此处说明页面的用途
*/
const API = require('../../API/api');
Page({

  /**
   * 页面的初始数据
   * 选项卡标识，内容列表页数组
   */
  data: {
    works_current: 0,
    works_list: [],
    success: false
  },

  /**
   * 生命周期函数--监听页面加载
   * 修改当前页面标题
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '作品',
    })
    this.getWorks(this.data.works_current)
  },

  /**
   * 私人函数注释
   * 用途
   * 参数
   */
  demo: function() {

  },
  //获取当前滑块的current值并调用getWorks方法更新页面内容
  bindChange: function(e) {
    const that = this;
    that.setData({
      works_current: e.detail.current
    })
    this.getWorks()
  },

  /* 点击切换页面并调用getWorks方法更新页面内容
    由works_current决定是哪个页面，故需要判断
  */
  checkCurrent: function(e) {
    const that = this
    if (that.data.works_current === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        works_current: e.target.dataset.current
      })
    this.getWorks()
    }
  },

  getWorks: function() {
    API.getWorks(this.data.works_current + 1).then(res => {
      //console.log(this.data.works_current + 1);    //res是后台返回的数据
      if (res != '') {
        this.setData({
          success: true,
          works_list: res
        })
      } else {
        this.setData({
          success: false
        })
      }
    })
  },

  /* 进入作品介绍页面
     传入当前作品的id和标题(获取自定义属性时把属性名改为小写)
  */
  checkPage: function(e) {
    wx.navigateTo({
      url: 'works_page/works_page?works_ID=' + e.currentTarget.dataset.worksid + '&works_title=' + e.currentTarget.dataset.workstitle,
    })
  }
})