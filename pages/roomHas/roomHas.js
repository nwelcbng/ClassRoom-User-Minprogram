// pages/roomHas/roomHas.js
import {getReserve} from '../../network/reserve'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classHas:[]
  },

  onLoad: function (options) {
    getReserve().then(res => {
          if(res.code === 1){
            this.setData({
              classHas:res.data
            })
          }else{
            wx.showToast({
              title: res.msg,
              icon:'error',
              duration:1500
            })
          }
    }).catch(err => {
      wx.showToast({
        title: '网络错误',
        icon:'error',
        duration:1500
      })
    })
  },

  onPullDownRefresh: function () {
    wx.showLoading({
      title: '刷新中'
    })
    getReserve().then(res => {
      console.log(res)
      wx.hideLoading({
        success: () => {
          if(res.code === 1){
            this.setData({
              classHas:res.data
            })
          }else{
            wx.showToast({
              title: res.msg,
              icon:'error',
              duration:1500
            })
          }
        },
      })
      wx.stopPullDownRefresh({
        success: () => {
        },
      })
    }).catch(err => {
      wx.showToast({
        title: '网络错误',
        icon:'error',
        duration:1500
      })
    })
  }
})