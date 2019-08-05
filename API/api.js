// api.js

const API_BASE_URL = 'http://localhost:3000/admin/api';

const request = (url, data) => { 

  let _url = API_BASE_URL  + url;

  return new Promise((resolve, reject) => {

    wx.request({
      url: _url,
      method: "get",
      data: data,
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


module.exports ={
    
  getStudentInfo:(data) =>{
    return request('/rest/students/'+data.stuNo,'')    //查询接口
  },
}