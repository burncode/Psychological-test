//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://ww1.sinaimg.cn/large/eccb7e56ly1fksaf0sewpj20go0afwij.jpg',
      'http://ww1.sinaimg.cn/large/eccb7e56ly1fksanbr218j20dw099q3k.jpg',
      'http://ww1.sinaimg.cn/large/eccb7e56ly1fksanpwobvj20ms0ctgm9.jpg',
      'http://ww1.sinaimg.cn/large/eccb7e56ly1fkscjfpzd9j20xc0m53zw.jpg'
    ],
    contItems:[
      {
        url:"../../img/jpdu1.jpg",
        title:"这里是标题"
      },
       {
        url: "../../img/jpdu3.jpg",
        title: "这里是标题"
      },
       {
         url: "../../img/jpdu4.jpg",
         title: "这里是标题"
       },
        {
         url: "../../img/jpdu2.jpg",
         title: "这里是标题"
       }
         
    ],
    listitems:[
      {
        url: "../../img/jpdu1.jpg",
        url1: "../../img/jpdu2.jpg",
        title: "这里是标题",
        content:"这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容"
      },
      {
        url: "../../img/jpdu3.jpg",
        url1: "../../img/jpdu4.jpg",
        title: "这里是标题",
        content: "这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容"
      },
      {
        url: "../../img/jpdu4.jpg",
        url1: "../../img/jpdu3.jpg",
        title: "这里是标题",
        content: "这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容"
        
      },
      {
        url: "../../img/jpdu2.jpg",
        url1: "../../img/jpdu1.jpg",
        title: "这里是标题",
        content: "这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容"
      }
     
    ],
   
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  //------------------事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000);
  },
})
