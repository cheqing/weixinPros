const app = getApp();
// var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    tabs: ["点菜", "评价", "商家"],  // 导航栏选项
    activeIndex: 0, // 顶部导航栏选中项
    currMenu: 0,  //左侧菜单栏选中项
    // sliderOffset: 0,
    // sliderLeft: 0,
    menu: [
      {
        id: 11,
        typeName: '快餐',
        content: [
          { name: "炸鸡", img: "http://i2.kiimg.com/601998/a955867016875a41.jpg", sales:22,  rating: 3, price: 15, nums: 10},
          { name: "汉堡", img: "http://i4.piimg.com/601998/9ce47f2f19d7717d.jpg", sales: 22, rating: 3, price: 15, nums: 10 },
          { name: "鸡翅", img: "http://i4.piimg.com/601998/a88338a6d392a569.jpg", sales: 22, rating: 3, price: 15, nums: 10 },
          { name: "薯条", img: "http://i4.piimg.com/601998/473847a250bb0186.jpg", sales: 22, rating: 3, price: 15, nums: 10 }
        ]
      },
      {
        id: 12,
        typeName: '盖浇饭',
        content: [
          { name: "土豆牛肉盖浇饭", img: "http://i4.piimg.com/601998/a014d6160fd7b504.jpg", sales: 22, rating: 3, price: 15, nums: 10 },
          { name: "番茄炒蛋盖浇饭", img: "http://i4.piimg.com/601998/da9e00c0bccd6fb0.jpg", sales: 22, rating: 3, price: 15, nums: 10 },
          { name: "鸡翅", img: "http://i4.piimg.com/601998/a88338a6d392a569.jpg", sales: 22, rating: 3, price: 15, nums: 10 },
          { name: "薯条", img: "http://i4.piimg.com/601998/473847a250bb0186.jpg", sales: 22, rating: 3, price: 15, nums: 10 }
        ]
      },
      {
        id: 13,
        typeName: '养生粥',
        content: [
          { name: "桂圆莲子", img: "http://i4.piimg.com/601998/a88338a6d392a569.jpg", sales: 22, rating: 3, price: 15, nums: 10 },
          { name: "皮蛋瘦肉粥", img: "http://i4.piimg.com/601998/da9e00c0bccd6fb0.jpg", sales: 22, rating: 3, price: 15, nums: 10 },
          { name: "鸡翅", img: "http://i4.piimg.com/601998/a88338a6d392a569.jpg", sales: 22, rating: 3, price: 15, nums: 10 },
          { name: "薯条", img: "http://i4.piimg.com/601998/473847a250bb0186.jpg", sales: 22, rating: 3, price: 15, nums: 10 }
        ]
      },
      {
        id: 14,
        typeName: '小吃',
        content: [
          { name: "肉夹馍", img: "http://i4.piimg.com/601998/473847a250bb0186.jpg", sales: 22, rating: 3, price: 15, nums: 10 }
        ]
      }
    ],

  },

  // 顶部菜单栏切换事件
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  // 左侧菜单栏点击事件
  onMenuSidebar: function(e){
    // 获取点击的菜单索引并进行赋值保存
    this.setData({
      currMenu: e.currentTarget.dataset.index
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // wx.getSystemInfo({
    //   success: function (res) {
    //     that.setData({
    //       sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
    //       sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
    //     });
    //   }
    // });
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