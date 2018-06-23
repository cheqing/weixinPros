//index.js
//获取应用实例
const app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'green',
    scrollTop: 100,
    scrollLeft: 0,
    yuyuetime: '',
    info: {
      addr: '燕郊开发区富地广场E座二层艺象标儿童创艺美术中心',
      time: "09:00 -- 22:00",
      phone: "0316-5752052"
    }
  },
 
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 培训报名时间修改事件
  bindDateChange: function(e){
    this.setData({yuyuetime: e.detail.value});
  },

  // 培训报名提交事件
  formSubmit: function(e){
    console.log(e.detail.value);
    wx.request({
      url: 'http://bxkhj6.natappfree.cc/hello',
      // data:e.detail.value,
      data: e.detail.value,
      method: 'POST', 
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function(res){
        console.log('响应的数据是：'+res.data);
      }
    })
  },
  onLoad: function () {
    // wx.showModal({
    //   title: '提示',
    //   content: '功能暂未开放，敬请期待！',
    //   showCancel: false,
    // })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
