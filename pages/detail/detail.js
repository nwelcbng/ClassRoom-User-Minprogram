// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    newItem:null
  },

  onLoad: function (options) {
    this.setData({
      title:options.title
    })
    let newItem = wx.getStorageSync('news').find(item => {
      return item.title == options.title;
    })
    if(!newItem){
      newItem = wx.getStorageSync('newsSearch').find(item => {
        return item.title == options.title;
      })
    }
    this.setData({
      newItem:newItem
    })
  }
})