//logs.js
const util = require('../../utils/util.js')

Page({
  data: { //参与页面渲染的数据
    logs: []
  },
  onLoad: function (option) { //页面渲染后执行
    console.log("传过来的参数是：" + option.name);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
