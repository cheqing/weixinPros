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
    actionSheetHidden: true,
    actionSheetItems: ['item1', 'item2', 'item3']
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