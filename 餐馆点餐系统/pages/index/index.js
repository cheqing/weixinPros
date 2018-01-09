//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    menu: [
      {
        id: 11,
        typeName: '快餐',
        content: [
          { name: "炸鸡", img: "http://i2.kiimg.com/601998/a955867016875a41.jpg", sales: 22, rating: 3, price: 15, nums: 0 },
          { name: "汉堡", img: "http://i4.piimg.com/601998/9ce47f2f19d7717d.jpg", sales: 22, rating: 3, price: 10, nums: 0 },
          { name: "鸡翅", img: "http://i4.piimg.com/601998/a88338a6d392a569.jpg", sales: 22, rating: 3, price: 14, nums: 0 },
          { name: "薯条", img: "http://i4.piimg.com/601998/473847a250bb0186.jpg", sales: 22, rating: 3, price: 11, nums: 0 }
        ]
      },
      {
        id: 12,
        typeName: '盖浇饭',
        content: [
          { name: "土豆牛肉盖浇饭", img: "http://i4.piimg.com/601998/a014d6160fd7b504.jpg", sales: 22, rating: 3, price: 15, nums: 0 },
          { name: "番茄炒蛋盖浇饭", img: "http://i4.piimg.com/601998/da9e00c0bccd6fb0.jpg", sales: 22, rating: 3, price: 20, nums: 0 },
          { name: "鸡翅", img: "http://i4.piimg.com/601998/a88338a6d392a569.jpg", sales: 22, rating: 3, price: 5, nums: 0 },
          { name: "薯条", img: "http://i4.piimg.com/601998/473847a250bb0186.jpg", sales: 22, rating: 3, price: 8, nums: 0 }
        ]
      },
      {
        id: 13,
        typeName: '养生粥',
        content: [
          { name: "桂圆莲子", img: "http://i4.piimg.com/601998/a88338a6d392a569.jpg", sales: 22, rating: 3, price: 22, nums: 0 },
          { name: "皮蛋瘦肉粥", img: "http://i4.piimg.com/601998/da9e00c0bccd6fb0.jpg", sales: 22, rating: 3, price: 20, nums: 0 },
          { name: "鸡翅", img: "http://i4.piimg.com/601998/a88338a6d392a569.jpg", sales: 22, rating: 3, price: 10, nums: 0 },
          { name: "薯条", img: "http://i4.piimg.com/601998/473847a250bb0186.jpg", sales: 22, rating: 3, price: 15, nums: 0 }
        ]
      },
      {
        id: 14,
        typeName: '小吃',
        content: [
          { name: "肉夹馍", img: "http://i4.piimg.com/601998/473847a250bb0186.jpg", sales: 22, rating: 3, price: 15, nums: 0 }
        ]
      }
    ]
  },
  
  onLoad: function () {
    
  }
})
