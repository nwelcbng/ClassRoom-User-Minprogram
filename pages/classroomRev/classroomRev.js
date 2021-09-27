// pages/classroomRev/classroomRev.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:"",
    classes:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type:options.type
    })
    const classes = wx.getStorageSync('Allclass').find((item) => {
      return item.position == this.data.type
    });
    this.setData({
      classes:classes.class
    })
  }
})