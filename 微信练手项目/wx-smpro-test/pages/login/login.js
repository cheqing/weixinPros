const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    email: '',
    password: ''
  },

  // 登录
  loginSubmit: function(e){
    wx.showToast({
      title: '登录中...',
      icon:'loading',
      duration: 3000,
      mask: true
    })
    //网络请求开始,
    wx.request({
      url: 'http://18t826y954.imwork.net/login',
      data: { email: e.detail.value.email, password: e.detail.value.password},
      header: { 'content-type': 'application/x-www-form-urlencoded'},
      method: 'POST',
      success: function(res){
        //关闭模态提示框
        wx.hideToast();
        //判断后台返回的状态码，并做下一步的业务处理
        if(res.data.meta.status == 200){
          console.log("恭喜你，登录成功！");
        }
        wx.switchTab({
          url: '/pages/index/index',
        })
      },
      fail: function(res){
        wx.showModal({
          title: '登录失败',
          content: '请检查用户名和密码',
          showCancel: false
        })
      }
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