//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    info:{
      addr:'燕郊开发区富地广场E座二层艺象标儿童创艺美术中心',
      time:"09:00 -- 22:00",
      phone:"0316-5752052"
    },
    logo:"http://chuantu.biz/t6/247/1520391361x-1376440222.png",
    // imgs:{
    //   img1:[
    //     'http://chuantu.biz/t6/247/1520391786x-1376440222.jpg',
    //     'http://chuantu.biz/t6/247/1520392757x-1376440222.jpg',
    //     'http://chuantu.biz/t6/247/1520393064x1822611407.jpg'
    //   ],
    //   img2:[
    //     'http://chuantu.biz/t6/247/1520393241x-1376440234.jpg',
    //     'http://chuantu.biz/t6/247/1520393428x-1376440234.jpg',
    //     'http://chuantu.biz/t6/248/1520396133x1822611407.jpg'
    //   ]
    //   // img3:[
    //   //   'http://chuantu.biz/t6/248/1520396427x-1376440222.jpg'
    //   // ]
    // }
    imgs: [
      'http://chuantu.biz/t6/247/1520391786x-1376440222.jpg',
      'http://chuantu.biz/t6/247/1520392757x-1376440222.jpg',
      'http://chuantu.biz/t6/247/1520393064x1822611407.jpg',
      'http://chuantu.biz/t6/247/1520393241x-1376440234.jpg',
      'http://chuantu.biz/t6/247/1520393428x-1376440234.jpg',
      'http://chuantu.biz/t6/248/1520396133x1822611407.jpg'
    ]
  },
  //预览图片
  lookImg: function(e){
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgs;
    wx.previewImage({
      current: imgArr[index],
      urls: ['http://chuantu.biz/t6/247/1520391786x-1376440222.jpg',
        'http://chuantu.biz/t6/247/1520392757x-1376440222.jpg',
        'http://chuantu.biz/t6/247/1520393064x1822611407.jpg',
        'http://chuantu.biz/t6/247/1520393241x-1376440234.jpg',
        'http://chuantu.biz/t6/247/1520393428x-1376440234.jpg',
        'http://chuantu.biz/t6/248/1520396133x1822611407.jpg'
        ]
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tapPhone: function(e){
    wx.makePhoneCall({
      phoneNumber: '0316-5752052',
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
  }
})
