Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgWidth: 0, imgHeight: 0,
    note: [//标题与图片
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
  },
  //跳转事件
  toLife: function (e) {
    var idx = parseInt(e.currentTarget.id);
    switch (idx) {
      case 0:
        wx.navigateTo({
          url: '../life1/life1'
        });
        break;
      case 1:
        wx.navigateTo({
          url: '../life2/life2'
        });
        break;
    }
  },
})