// pages/classroom/classroom.js
import sortClass from "../../data/sortClass"
import {searchClass} from "../../network/classroom"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      {
        image:'/assets/imgs/tabbar/jiaoshi.png'
      },
      {
        image:'/assets/imgs/tabbar/jiaoshi-active.png'
      }
      ],  //这是本地图片
      Allclass:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中'
    })
    const Allclass = sortClass([
      {
        cid: "1",
        position: "林世哲大楼",
        capacity: "50人"
      },
      {
        cid: "2",
        position: "林世哲大楼",
        capacity: "60人"
      },
      {
        cid: "3",
        position: "材化大楼",
        capacity: "70人"
      },
      {
        cid: "4",
        position: "材化大楼",
        capacity: "80人"
      },
      {
        cid: "6",
        position: "土建大楼",
        capacity: "80人"
      },
      {
        cid: "7",
        position: "智能大楼",
        capacity: "80人"
      },
      {
        cid: "8",
        position: "瑞基大楼",
        capacity: "80人"
      },
      {
        cid: "9",
        position: "梁绳基大楼",
        capacity: "80人"
      },
      {
        cid: "10",
        position: "项南大楼",
        capacity: "80人"
      },
      {
        cid: "11",
        position: "信电大楼",
        capacity: "50人"
      },]
    )
    searchClass().then(res => {
      if(res.code === 1){
        const Allclass = sortClass(res.data) 
        this.setData({
          Allclass: Allclass
        })
        wx.setStorageSync('Allclass', Allclass)
        wx.hideLoading({
          success: (res) => {},
        })
      }else{
        wx.hideLoading({
          success: (res) => {        
            wx.showToast({
            title: '网络错误',
            icon:'error',
            duration:1500
          })},
        })
      }
    })

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