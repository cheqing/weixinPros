//index.js
//获取应用实例
const app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'green',
    scrollTop: 100,
    scrollLeft: 0,
    info:{
      addr:'燕郊开发区富地广场E座二层艺象标儿童创艺美术中心',
      time:"09:00 -- 22:00",
      phone:"0316-5752052"
    },
    swiperItem:[
      "http://i4.bvimg.com/640329/966462dab065726bt.jpg",
      "http://i4.bvimg.com/640329/ce46b7f10d1b846bt.jpg",
      "http://i4.bvimg.com/640329/d8b838fbb7a947bct.jpg"
    ],
    gongnengItem: [
      { name: '学校简介', url: '../../imgs/xuexiaojianjie.jpg' },
      { name: '作品展示', url: '../../imgs/zuopinzhanshi.jpg' },
      { name: '咨询客服', url: '../../imgs/zixunkefu.jpg' },
      { name: '在线预约', url: '../../imgs/zaixianyuyue.jpg' }
    ],
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
    imgs_chuangyike: [
      'http://i4.bvimg.com/640329/966462dab065726bt.jpg',
      'http://i4.bvimg.com/640329/f851bd46bf07e871t.jpg'
    ],
    imgs_chuangyisumiaoke: [
      'http://i4.bvimg.com/640329/ce46b7f10d1b846bt.jpg',
      'http://i4.bvimg.com/640329/319c952bcf635cd1t.jpg',
      'http://i4.bvimg.com/640329/4db4eb71a3732b47t.jpg'
    ],
    imgs_dongmanke: [
      'http://i4.bvimg.com/640329/719ea24bb9b0c744t.jpg',
      'http://i4.bvimg.com/640329/068b134c00026a25t.jpg'
    ],
    imgs_guohuake: [
      'http://i4.bvimg.com/640329/d8b838fbb7a947bct.jpg',
      'http://i4.bvimg.com/640329/2b75bfc1449e5e67t.jpg'
    ],
    imgs_hanjiaweijingguanke: [
      'http://i4.bvimg.com/640329/9db1aab4ee4d6d40t.jpg',
      'http://i4.bvimg.com/640329/46f1975f448d324bt.jpg',
      'http://i4.bvimg.com/640329/43e991d5cdbeacc1t.jpg'
    ],
    imgs_huodong: [
      'http://i4.bvimg.com/640329/c21dd7d6d1fd9a61t.jpg',
      'http://i4.bvimg.com/640329/6a45c86407a47866t.jpg',
      'http://i4.bvimg.com/640329/a8d1fe97d846c6a8t.jpg'
    ]
  },
  //通过设置滚动条位置实现画面滚动
  tapMove: function (e) {
    this.setData({
      scrollLeft: this.data.scrollLeft + 10
    })
  },
  //预览图片
  lookImg: function(e){
    console.log(e)
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgs_chuangyike;
    wx.previewImage({
      current: imgArr[index],
      urls: ['http://i4.bvimg.com/640329/966462dab065726bt.jpg',
        'http://i4.bvimg.com/640329/f851bd46bf07e871t.jpg',
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
