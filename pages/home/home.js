// // pages/home/home.js
// import {getSwiper} from "../../network/home"
import {getNews,searchNews} from "../../network/home"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:null,
    background: [
      {
        image:'/assets/imgs/tabbar/jiaoshi.png'
      },
      {
        image:'/assets/imgs/tabbar/jiaoshi-active.png'
      },
      {
        image:'/assets/imgs/tabbar/jiaoshi.png'
      },
      {
        image:'/assets/imgs/tabbar/jiaoshi-active.png'
      }
      ],  //这是本地图片
      news:[],
      newsSearch:[]
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

  },
  onLoad(){
    getNews().then(res => {
      wx.setStorageSync('news', res.data.announcements);
      this.setData({
        news:res.data.announcements
      })
    }).catch(err => {
      wx.showToast({
        title: err,
        icon:'error'
      })
    })
  },
  onSearch(options){
    console.log(options.title)
    searchNews(options.title).then(res => {
      wx.setStorageSync('newsSearch', res.data.announcements);
      this.setData({
        newsSearch:res.data.announcements
      })
    }) 
  }
})