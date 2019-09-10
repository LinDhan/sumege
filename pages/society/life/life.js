const API = require('../../../API/api');
Page({
  data: {
    title_whole: "",
    html:""

  },
  //生活文章详情接口,data为某一文章的id
  getLifeArticle: function (life_ID) {
    API.getLifeArticle(life_ID).then(res => {
      console.log(res);    //res是后台返回的数据
      if (res != '') {
        this.setData({
          title_whole: res.title,
          html: res.body.replace('<img', '<img style="max-width:100%;height:auto" ') //防止富文本图片过大

        })
      }
      else {
        return false
      }
    })
  },
  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    this.getLifeArticle(options.life_ID)
  },



})