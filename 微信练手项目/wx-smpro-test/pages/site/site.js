const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // text:"这是一个页面"
    sideBarInfo: [
      {
        id: 11, 
        name: '零食', 
        nodeItem: [
          { name: "薯条", logo: "../imgs/logo.jpg" },
          { name: "花生", logo: "../imgs/logo.jpg" },
          { name: "辣条", logo: "../imgs/logo.jpg" }
        ]
      },
      {
        id: 12,
        name: '水果',
        nodeItem: [
          { name: "苹果", logo: "../imgs/logo.jpg" },
          { name: "香蕉", logo: "../imgs/logo.jpg" },
          { name: "牛油果", logo: "../imgs/logo.jpg" }
        ]
      },
      {
        id: 13,
        name: '饮料',
        nodeItem: [
          { name: "可乐", logo: "../imgs/logo.jpg" },
          { name: "红茶", logo: "../imgs/logo.jpg" },
          { name: "农夫山泉", logo: "../imgs/logo.jpg" }
        ]
      },
    ],
    swiperItem: {
      swiperOne: [
        { name: '美食', url: '../imgs/food.png' },
        { name: '旅游', url: '../imgs/travel.png' },
        { name: '住宿', url: '../imgs/shop.png' },
        { name: '电话', url: '../imgs/phone.png' },
        { name: '商场', url: '../imgs/shop.png' },
        { name: '银行', url: '../imgs/bank.png' },
        { name: '药店', url: '../imgs/phone.png' },
        { name: '电影', url: '../imgs/food.png' }
      ],
      swiperTwo: [
        { name: '美食', url: '../imgs/food.png' },
        { name: '旅游', url: '../imgs/travel.png' },
        { name: '住宿', url: '../imgs/shop.png' },
        { name: '电话', url: '../imgs/phone.png' },
        { name: '商场', url: '../imgs/shop.png' },
        { name: '银行', url: '../imgs/bank.png' },
        { name: '药店', url: '../imgs/phone.png' },
        { name: '电影', url: '../imgs/food.png' }
      ]
    },
    actionSheetHidden: true,
    actionSheetItems: ['item1', 'item2', 'item3'],
    siteListHidden: true,
    siteList: []
  },
  listenerButton: function () {
    this.setData({
      //取反
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },

  listenerActionSheet: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  // 地址输入人事件
  onInputSite: function(e){
    // 获取输入内容
    var siteName = e.detail.value;
    if(siteName){
      // 调用Baidu地址检索接口
      this.searchSite(siteName);
      this.setData({
        siteListHidden: false
      });
    }else{
      this.setData({
        siteListHidden: true
      });
    }
  },

  searchSite: function(siteName){
    var that = this;
    wx.request({
      url: "http://api.map.baidu.com/place/v2/search?query=" + siteName +"&page_size=20&page_num=0&region=北京&output=json&ak=btsVVWf0TM1zUBEbzFz6QqWF",
      success: function(data){
        console.log(data);
        that.setData({
          siteList: data.data.results
        });
      }
    })
  },

  // 选中地址事件
  onSiteItem: function(e){
    // 将选中的地址缓存在本地
    wx.setStorageSync('site', e.currentTarget.dataset.site.substr(e.currentTarget.dataset.site.indexOf('市') + 1, 7))
    // 跳转到首页
    wx.switchTab({
      url: '/pages/goods/goods',
    })
  },

// 点击定位当前位置事件
  onCurrSite: function(e){
    // 获取地理位置
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        // 获取经纬度信息
        var latitude = res.latitude;
        var longitude = res.longitude;
        // 通过获取到的经纬度信息调用Baidu地图api接口反向获取地址位置
        wx.request({
          url: "http://api.map.baidu.com/geocoder/v2/?location=" + latitude + "," + longitude + "&output=json&pois=0&ak=btsVVWf0TM1zUBEbzFz6QqWF",
          method: 'get',
          success: function (res) {
            console.log(res.data.result.formatted_address);
            wx.setStorageSync('site', res.data.result.formatted_address.substr(res.data.result.formatted_address.indexOf('市') + 1, 7))

            // 跳转到首页
            wx.switchTab({
              url: '/pages/goods/goods',
            })
          }
        })
      },
    })

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})