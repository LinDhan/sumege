const API = require('../../../API/api');
Page({
  data: {
    title_whole: "",
   // portrait: "",
    name: "",
    grade: "",
    area: "",
    html:""
   
  },
  //学习文章详情接口,data为某一文章的id
  getStudyArticle: function (study_ID) {
    API.getStudyArticle(study_ID).then(res => {
      console.log(res);    //res是后台返回的数据
      if (res != '') {
        this.setData({
         title_whole:res.title,
        // portrait: res.portrait,
         name:res.author,
         grade:res.authorGrade,
         area:res.authorDomain,
         html:res.body
          
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
    this.getStudyArticle(options.study_ID)
},





})