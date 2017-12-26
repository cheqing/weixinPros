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
    site: '',
    shop_list: [
      {
        shop_img: 'http://i4.piimg.com/601998/23f361491b45ddf2.jpg',
        shop_title: '精武鸭脖(胡同店)\r\n',
        shop_msg: '30分钟送达\r\n起送价￥20|配送费￥5\r\n',
        shop_price: '满50减10，满100减25',
        shop_nums: '月售23487',
      },
      {
        shop_img: 'http://i2.kiimg.com/601998/a955867016875a41.jpg',
        shop_title: '御膳房\r\n',
        shop_msg: '20分钟送达\r\n起送价￥15|配送费￥3\r\n',
        shop_price: '满20减5，满25减7',
        shop_nums: '月售568',
      },
      {
        shop_img: 'http://i4.piimg.com/601998/9ce47f2f19d7717d.jpg',
        shop_title: '韩式炸鸡啤酒屋\r\n',
        shop_msg: '40分钟送达\r\n起送价￥20|配送费￥7\r\n',
        shop_price: '满30减5，满50减7',
        shop_nums: '月售6589',
      },
      {
        shop_img: 'http://i4.piimg.com/601998/da9e00c0bccd6fb0.jpg',
        shop_title: '榴芒先生(北土城店)\r\n',
        shop_msg: '25分钟送达\r\n起送价￥25|配送费￥6\r\n',
        shop_price: '满30减3，满50减8',
        shop_nums: '月售1426',
      }
    ],
    sortList:[
      { name: '综合排序', img: '' },
      { name: '速度最快', img: '' },
      { name: '评分最高', img: '' },
      { name: '起送价最低', img: '' },
      { name: '配送费最低', img: '' },
    ],
    sortSelected: '综合排序',
    maskSortHidden: true,
    maskFilterHidden: true,
    sortActive:0,
    shopFeatureList:[
      { text: '免费配送', img: '' },
      { text: '0元起送', img: '' },
      { text: '新商家', img: '' },
      { text: '品牌商家', img: '' },
      { text: '超时免赔', img: '' },
    ],
    featureSelected: [],
    discountSelected: null,
    filterSelected:0,
    shopDiscountList: [
      { text: '满减优惠', icon: '减', iconColor: '#FF635B' },
      { text: '进店领券', icon: '领', iconColor: '#FF7298' },
      { text: '满反代金券', icon: '反', iconColor: '#FF4343' },
      { text: '折扣商品', icon: '折', iconColor: '#C183E2' },
      { text: '提前下单优惠', icon: '订', iconColor: '#6FDF64' },
      { text: '满赠活动', icon: '赠', iconColor: '#FDC41E' },
      { text: '满免配送', icon: '免', iconColor: '#43B697' }
    ]
  },
  // 点击排序，弹出模态层
  onSortShow: function(e){
    //隐藏筛选模态层
    // this.onFilterHide()
    // 显示排序模态层
    this.setData({
      maskSortHidden: false
    })
  },
  // 点击排序，隐藏模态层
  onSortHide: function(e){
    this.setData({
      maskSortHidden: true
    })
  },
  // 点击筛选，弹出筛选模态层
  onFilterShow: function(e){
    // 隐藏排序模态层
    // this.onSortHide()
    // 显示筛选模态层
    this.setData({
      maskFilterHidden: false
    })
  },
  // 点击筛选，隐藏筛选模态层
  onFilterHide: function (e) {
    this.setData({
      maskFilterHidden: true
    })
  },
  // 选中排序方式后，赋值并隐藏模态层
  onSortSelect: function(e){
    this.onSortHide(e);
    //为选中的排序规则赋值,后期这里会请求后台接口
    this.setData({
      sortSelected: this.data.sortList[e.currentTarget.dataset.index].name
    });
  },
  // 选中排序事件 销量最高/距离最近
  onTapTag: function(e){
    this.setData({
      sortActive: e.currentTarget.dataset.index
    })
    // 选中则关闭模态框
    this.onSortHide()
    this.onFilterHide()
  },

  // 商家特色选中事件
  onFeatureSelect: function(e){
    // 判断选中的‘商家特色’属性是否已被选中，并改变其选中值
    // if (this.data.shopFeatureList[e.currentTarget.dataset.index].selected != null || this.data.shopFeatureList[e.currentTarget.dataset.index].selected){
    //   delete this.data.shopFeatureList[e.currentTarget.dataset.index].selected
    //   //将选中属性的数量-1
    //   this.data.filterSelected = this.data.filterSelected - 1
    // }else{
    //   this.data.shopFeatureList[e.currentTarget.dataset.index].selected = true
    //   //将选中属性的数量+1
    //   this.data.filterSelected = this.data.filterSelected + 1
    // }
    // this.setData({
    //   shopFeatureList: this.data.shopFeatureList,
    //   filterSelected: this.data.filterSelected
    // });
    // console.log(this.data.shopFeatureList)

    // 将选中的商家特色赋值为true，并对选中的总结果+1
    var info = this.data.featureSelected
    info[e.currentTarget.dataset.index] = !info[e.currentTarget.dataset.index];
    this.setData({
      featureSelected: info,
      filterSelected: this.data.filterSelected + (info[e.currentTarget.dataset.index] ? 1 : -1)
    });
  },

  // 优惠活动选中事件
  onDiscountSelect: function(e){
    // 将选中的优惠活动索引值进行赋值
    if (this.data.discountSelected != e.currentTarget.dataset.index){
      this.setData({
        discountSelected: e.currentTarget.dataset.index,
        filterSelected: this.data.filterSelected + (this.data.discountSelected==null? 1:0)
      });
    }else{
      this.setData({
        discountSelected: null,
        filterSelected: this.data.filterSelected - 1
      });
    }
  },

  // 筛选-清除点击事件
  onFilterClear: function(e){
    // 清空商家特色选中值
    this.setData({
      'featureSelected': [false],
      discountSelected: null,
      filterSelected: 0
    })
  },

  // 筛选-完成点击事件
  onFilterFinish: function(e){
    // 这里可以将用户选中的商家特色和优惠活动传送给后台，后台来处理业务逻辑然后返回新的数据进行展示
    

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //页面加载时对商家特色选中值进行初始化，默认都是false，没有选中,有几个商家特色，就要初始化几个对应的默认选中,如果只有一个默认值的话那么在页面初次渲染的时候讲会出错
    for (var i = 0; i < this.data.shopFeatureList.length; i++){
      this.data.featureSelected[i] = false
    }
    this.setData({
      featureSelected: this.data.featureSelected
    })
    // console.log(this.data.featureSelected);
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
    // 从缓存中获取用户选中的地址
    var site = wx.getStorageSync('site')
    this.setData({
      site: site
    })
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