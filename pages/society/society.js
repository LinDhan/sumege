const API = require('../../API/api');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    boolean: false,
    imgWidth: 0, imgHeight: 0,
    note1: [//学习数组
      { 
        title: '后台学习',
        url: 'http://zq.jhcms.cn/attachs/photo/201711/20171130_176CFE51B6710715B1BBBEF2F86ACB0C.jpg',
      },
      {
        title: '数字媒体技术专业延伸方向——特效',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
      },
      {
        title: 'UE4学习',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
      },
      {
        title: 'Unity游戏制作入门心得',
        url: 'http://zq.jhcms.cn/attachs/photo/201711/20171130_9E39DA252E3946BE36218D85876C4AB4.jpg',
      },
      {
        title: '游戏方向学习经验',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },

      {
        title: '浅谈数字媒体技术的后端方向',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72'
      },
      {
        title: '数字媒体技术专业延伸方向——特效',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },
      {
        title: 'Android开发入门感悟',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        title: 'Unity游戏制作入门心得',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      }
    ],
    note2: [//生活数组
      {
        title: '学生宿舍',
        url: 'https://i01piccdn.sogoucdn.com/851d4e87e105a013',
      },
      {
        title: '附近交通',
        url: 'https://i01piccdn.sogoucdn.com/e1bc856994b51f15',
      },
      {
        title: '饭堂介绍',
        url: 'https://i03piccdn.sogoucdn.com/2457dbd7f5f52974',
      },
      {
        title: '关于社团',
        url: 'https://i01piccdn.sogoucdn.com/170eaa3ac99563ba',
      },
      {
        title: '学生宿舍',
        url: 'https://i01piccdn.sogoucdn.com/c14bd275016f2943'
      },

      {
        title: '附近交通',
        url: 'https://i04piccdn.sogoucdn.com/6c639213cc5e9cd5'
      },
      {
        title: '维修损坏',
        url: 'https://i04piccdn.sogoucdn.com/30cbea8631f91499'
      },
      {
        title: '快递医药',
        url: 'https://i01piccdn.sogoucdn.com/faaa69ad7feccfe9'
      },
      {
        title: '附近饭堂',
        url: 'https://i03piccdn.sogoucdn.com/2240c378b2d75809'
      }
    ]
    /*success: false,
    note1: []*/

  },
  getStudyArticlesList: function () {
    API.getStudyArticlesList({

    }).then(res => {

      console.log(res)    //res是后台返回的数据
      if (res != '') {
        this.setData({
          success: true,
          note1: res.note1,

        })
      } else {
        this.setData({
          success: false
        })
      }


    })
  },

  //学习跳转事件
  toStudy: function (e) {
    var idx = parseInt(e.currentTarget.id);
    switch (idx) {
      case 0:
        wx.navigateTo({
          url: '../society/study/study'
        });
        break;
      case 1:
        wx.navigateTo({
          url: '../society/study/study'
        });
        break;
    }
  },
  //生活跳转事件
  toLife: function (e) {
    var idx = parseInt(e.currentTarget.id);
    switch (idx) {
      case 0:
        wx.navigateTo({
          url: '../society/life/life'
        });
        break;
      case 1:
        wx.navigateTo({
          url: '../society/life/life'
        });
        break;
    }
  },
  //学习生活总页面跳转
  EventHandle: function () {
    var bol = this.data.boolean;
    this.setData({
      boolean: !bol
    })
  }

})