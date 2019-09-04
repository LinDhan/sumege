// api.js

const API_BASE_URL = 'http://node.fl123.xyz/weixin/api';

const request = (url) => {

  let _url = API_BASE_URL + url;

  return new Promise((resolve, reject) => {

    wx.request({
      url: _url,
      method: "get",
      data:'',
      header: {
        'Content-Type': 'application/json'
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      }
    })
  });
}


module.exports = {

  //学生信息查询接口
  getStudentInfo: (data) => {
    return request('/studentInfo/' + data)
  },

  //课程信息接口，data说明：大一课程传入1，大二课程传入2，以此类推
  getCourses: (data) => {
    return request('/courses/' + data.gradeID)
  },

  //作品列表接口，data说明：1游戏，2三维动画，3编程，4影视，5网页app（传入对应数字）
  getWorks: (data) => {
    return request('/works/' + data)
  },

  //作品详情接口，data为某一作品id
  getWorkDetails: (data) => {
    return request('/work/' + data)
  },

  //各专业方向比例接口
  getEmploymentRatio: () => {
    return request('/employment')
  },

  //专业方向信息接口,data为某一专业方向的id
  getSpeciality: (data) => {
    return request('/speciality/' + data.dircID)
  },

  //就业形势信息接口,data为某一就业方向的id
  getEmployment: (data) => {
    return request('/employment/' + data.jobsID)
  },

  //学习文章列表接口
  getStudyArticlesList: () => {
    return request('/studyArticlesList')
  },

  //生活文章列表接口
  getLifeArticlesList: () => {
    return request('/lifeArticlesList')
  },

  //学习文章详情接口,data为某一文章的id
  getStudyArticle: (data) => {
    return request('/studyArticle/' + data)
  },

  //生活文章详情接口,data为某一文章的id
  getLifeArticle: (data) => {
    return request('/lifeArticle/' + data)
  }
}