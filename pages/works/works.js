/* 
  pages/works/works.js
  作品分享
  此处说明页面的用途
*/
const app=getApp();
Page({

  /**
   * 页面的初始数据
   * 依次为选项卡标识、对应页面标识、游戏内容页数组等其他类型内容页数组
   */
  data: {
      works_current:0,
      works_Page: 0,
      works_game:[
          { id: 'game1', img: '../works/text_img/text1.png', title: '游戏1', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场'},
        { id: 'game2', img: '../works/text_img/text1.png', title: '游戏2', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'game3', img: '../works/text_img/text1.png', title: '游戏3', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'game4', img: '../works/text_img/text1.png', title: '游戏4', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'game5', img: '../works/text_img/text1.png', title: '游戏5', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' }
      ],
      works_animation: [
        { id: 'animation1', img: '../works/text_img/text1.png', title: '三维1', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'animation2', img: '../works/text_img/text1.png', title: '三维2', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'animation3', img: '../works/text_img/text1.png', title: '三维3', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'animation4', img: '../works/text_img/text1.png', title: '三维4', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'animation5', img: '../works/text_img/text1.png', title: '三维5', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' }
      ],
      works_program: [
        { id: 'program1', img: '../works/text_img/text1.png', title: '编程1', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'program2', img: '../works/text_img/text1.png', title: '编程2', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'program3', img: '../works/text_img/text1.png', title: '编程3', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'program4', img: '../works/text_img/text1.png', title: '编程4', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'program5', img: '../works/text_img/text1.png', title: '编程5', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' }
      ],
      works_film: [
        { id: 'film1', img: '../works/text_img/text1.png', title: '影视1', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'film2', img: '../works/text_img/text1.png', title: '影视2', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'film3', img: '../works/text_img/text1.png', title: '影视3', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'film4', img: '../works/text_img/text1.png', title: '影视4', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'film5', img: '../works/text_img/text1.png', title: '影视5', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' }
      ],
      works_web: [
        { id: 'web1', img: '../works/text_img/text1.png', title: '网页1', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'web2', img: '../works/text_img/text1.png', title: '网页2', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'web3', img: '../works/text_img/text1.png', title: '网页3', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'web4', img: '../works/text_img/text1.png', title: '网页4', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' },
        { id: 'web5', img: '../works/text_img/text1.png', title: '网页5', text: '一位逃离北上广的姑娘，辞职后在大理买下了一个农场' }
      ],

     
  },

  /**
   * 生命周期函数--监听页面加载
   * 修改当前页面标题
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '作品',
      })
  },

  /**
   * 私人函数注释
   * 用途
   * 参数
   */
  demo: function () {

  },
  //获取当前滑块的current值
  bindChange: function (e) {
      const that =this;
      that.setData({
        works_current: e.detail.current
      })
  },

  /* 点击切换页面
    由works_current决定是哪个页面，故需要判断
  */
  checkCurrent: function (e) {
      const that = this
      if (that.data.works_current === e.target.dataset.current) {
          return false
      } else {
        that.setData({
            works_current: e.target.dataset.current
        })
      }
  },
 
  /* 进入作品介绍页面
     由类别+序号确定进入哪个作品介绍页
     通过改变公有变量中的做作品类型，作品链接和作品介绍来改变页面内的数据
  */
  checkPage:function(e){
      const that =this;
      that.setData({
          works_Page: e.currentTarget.dataset.works_page       
      })
      switch(that.data.works_Page){
          case 0:
              return false;
          // 游戏部分
          case "game1":{
              app.globalData.works_type = 'video';
              app.globalData.works_videoSrc ='u0031rhteed';
              app.globalData.works_imgSrc ='';          
              app.globalData.works_text ='游戏介绍1';
              wx.navigateTo({
                  url: 'works_page/works_page',
              })
              break;
          }
          case "game2": {
              app.globalData.works_type = "image";
              app.globalData.works_videoSrc = ""; 
              app.globalData.works_imgSrc = [
                  {
                    src: "../text_img/text1.png"
                  },
                  {
                    src: "../text_img/text2.png"
                  },
                  {
                    src: "../text_img/text3.png"
                  }
                ]; 
              app.globalData.works_text = "游戏介绍2";  
              wx.navigateTo({
                url: 'works_page/works_page',
              });     
                break;
          }
          case "game3": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '游戏介绍3';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "game4": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '游戏介绍4';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "game5": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '游戏介绍5';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
         
          //  三维动画部分
          case "animation1": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '动画介绍1';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "animation2": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '动画介绍2';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "animation3": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '动画介绍3';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "animation4": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '动画介绍4';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "animation5": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '动画介绍5';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }

          //编程部分
          case "progra1": {
              app.globalData.works_type = "image";
              app.globalData.works_videoSrc = ""; 
              app.globalData.works_imgSrc = [
                  {
                    src: "../text_img/text1.png"
                  },
                  {
                    src: "../text_img/text2.png"
                  },
                  {
                    src: "../text_img/text3.png"
                  }
                ]; 
              app.globalData.works_text = "编程介绍1";  
              wx.navigateTo({
                url: 'works_page/works_page',
              });     
                break;
          }
          case "program2": {
              app.globalData.works_type = "image";
              app.globalData.works_videoSrc = ""; 
              app.globalData.works_imgSrc = [
                  {
                    src: "../text_img/text1.png"
                  },
                  {
                    src: "../text_img/text2.png"
                  },
                  {
                    src: "../text_img/text3.png"
                  }
                ]; 
              app.globalData.works_text = "编程介绍2";  
              wx.navigateTo({
                url: 'works_page/works_page',
              });     
                break;
          }
          case "program3": {
              app.globalData.works_type = "image";
              app.globalData.works_videoSrc = ""; 
              app.globalData.works_imgSrc = [
                  {
                    src: "../text_img/text1.png"
                  },
                  {
                    src: "../text_img/text2.png"
                  },
                  {
                    src: "../text_img/text3.png"
                  }
                ]; 
              app.globalData.works_text = "编程介绍3";  
              wx.navigateTo({
                url: 'works_page/works_page',
              });     
                break;
          }
          case "program4": {
              app.globalData.works_type = "image";
              app.globalData.works_videoSrc = ""; 
              app.globalData.works_imgSrc = [
                  {
                    src: "../text_img/text1.png"
                  },
                  {
                    src: "../text_img/text2.png"
                  },
                  {
                    src: "../text_img/text3.png"
                  }
                ]; 
              app.globalData.works_text = "编程介绍4";  
              wx.navigateTo({
                url: 'works_page/works_page',
              });     
                break;
          }
          case "program5": {
              app.globalData.works_type = "image";
              app.globalData.works_videoSrc = ""; 
              app.globalData.works_imgSrc = [
                  {
                    src: "../text_img/text1.png"
                  },
                  {
                    src: "../text_img/text2.png"
                  },
                  {
                    src: "../text_img/text3.png"
                  }
                ]; 
              app.globalData.works_text = "编程介绍5";  
              wx.navigateTo({
                url: 'works_page/works_page',
              });     
                break;
          }
          
          // 影视部分
          case "film1": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '影视介绍1';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "film2": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '影视介绍2';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "film3": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '影视介绍3';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "film4": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '影视介绍4';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "film5": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '影视介绍5';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          
          //网页及app
          case "web1": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '网页介绍1';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "web2": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '网页介绍2';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "web3": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '网页介绍3';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "web4": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '网页介绍4';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }
          case "web5": {
            app.globalData.works_type = 'video';
            app.globalData.works_videoSrc = 'u0031rhteed';
            app.globalData.works_imgSrc = '';
            app.globalData.works_text = '网页介绍5';
            wx.navigateTo({
              url: 'works_page/works_page',
            })
            break;
          }

        
      }

  }
})