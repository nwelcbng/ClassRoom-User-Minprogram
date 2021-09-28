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
    this.requestInfo();
  },
  requestInfo(){
    wx.showLoading({
      title: '加载中'
    })
    searchClass().then(res => {
      wx.hideLoading({
        success: () => {
          if(res.code === 1){
            const Allclass = sortClass(res.data) 
            this.setData({
              Allclass: Allclass
            })
            wx.setStorageSync('Allclass', Allclass)
          }else{ 
            wx.showToast({
                title: res.msg,
                icon:'error',
                duration:1500
            })
          }
        },
      })
    }).catch(err => {
      wx.hideLoading({
        success: () => {
          wx.showToast({
            title: '网络错误',
            icon:'error'
          })
        },
      })
    })
  },
  onPullDownRefresh(){
    wx.stopPullDownRefresh({
      success: () => {
        this.requestInfo();
      },
    })
  }
})