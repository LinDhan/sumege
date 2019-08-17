Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgWidth: 0, imgHeight: 0,
    note: [//标题与图片
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
        url: 'http://img4.imgtn.bdimg.com/it/u=2748975304,2710656664&fm=26&gp=0.jpg'
      },
      {
        title: 'Android开发入门感悟',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        title: 'Unity游戏制作入门心得',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      }
    ]
  },
  //跳转事件
  toStudy: function (e) {
    var idx = parseInt(e.currentTarget.id);
    switch(idx){
      case 0:
      wx.navigateTo({
          url: '../study1/study1'
      });
      break;
      case 1:
        wx.navigateTo({
          url: '../study2/study2'
        });
      break;
    }
  },
  
})