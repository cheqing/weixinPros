//app.js
App({
  //监听小程序初始化函数，当小程序初始化完后
  onLaunch: function () {
    // 获取地理位置
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        // 获取经纬度信息
        var latitude = res.latitude;
        var longitude = res.longitude;
        // 通过获取到的经纬度信息调用Baidu地图api接口反向获取地址位置
        wx.request({
          url: "http://api.map.baidu.com/geocoder/v2/?location=" + latitude + "," + longitude +"&output=json&pois=0&ak=btsVVWf0TM1zUBEbzFz6QqWF",
          method: 'get',
          success: function(res){
            console.log(res.data.result.formatted_address);
            wx.setStorageSync('site', res.data.result.formatted_address.substr(res.data.result.formatted_address.indexOf('市') + 1, 7))
          }
        })
      },
    })

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log("userInfo: " +res.userInfo);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log("user: "+this.globalData.userInfo);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})