const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImgs: [
      '../imgs/swiper1.jpg',
      '../imgs/swiper2.jpg',
      '../imgs/swiper3.jpg'
    ],
    menuImgs: [
      { name: '美食', url: '../imgs/food.ico' },
      { name: '旅游', url: '../imgs/travel.ico' },
      { name: '住宿', url: '../imgs/hotel.ico' },
      { name: '电话', url: '../imgs/phone.ico' },
      { name: '商场', url: '../imgs/shop.ico' },
      { name: '银行', url: '../imgs/bank.ico' },
      { name: '药店', url: '../imgs/medical.ico' },
      { name: '电影', url: '../imgs/movie.ico' }
    ],
    shop_info: [
      {
        info_img:'/pages/imgs/hanbao.ico',
        info_title: '肯德基汉堡(胡同店)\r\n',
        info_msg: '30分钟送达\r\n起送价￥20|配送费￥5\r\n',
        info_price: '满50减10，满100减25',
        info_nums: '月售23487',
      },
      {
        info_img: '../imgs/xingbake.ico',
        info_title: '星巴克奶茶(胡同店)\r\n',
        info_msg: '20分钟送达\r\n起送价￥15|配送费￥3\r\n',
        info_price: '满20减5，满25减7',
        info_nums: '月售568',
      },
      {
        info_img: '../imgs/fastfood.ico',
        info_title: '田老师(安贞门店)\r\n',
        info_msg: '40分钟送达\r\n起送价￥20|配送费￥7\r\n',
        info_price: '满30减5，满50减7',
        info_nums: '月售6589',
      },
      {
        info_img: '../imgs/noodles.ico',
        info_title: '李先生牛肉面(北土城店)\r\n',
        info_msg: '25分钟送达\r\n起送价￥25|配送费￥6\r\n',
        info_price: '满30减3，满50减8',
        info_nums: '月售1426',
      }
    ]
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