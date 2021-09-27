// pages/register/register.js

import register from"../../network/register"

Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  formSubmit(e){
    wx.setStorageSync('username', e.detail.value.username);
    wx.setStorageSync('password', e.detail.value.password);
    e.detail.value.level = 1;
    wx.showLoading({
      title: '请求中'
    })
    register(e.detail.value).then(res => {
      console.log(res)
      wx.hideLoading({
        success: () => {
          if(res.code === 1){
            wx.showToast({
              title: '注册成功',
              duration:1500
            })
            setTimeout(() => {
              wx.navigateTo({
                url: '/pages/login/login',
              })
            }, 1000);
          }else{
            wx.showToast({
              title: res.msg,
              icon:"error",
              duration:1500
            })
          }
        },
      })
    }).catch(() => {
      wx.hideLoading({
        success: () => {
          wx.showToast({
            title: '网络错误',
            icon:'error',
            duration:1500
          })
        }
      })
    })

  }
})