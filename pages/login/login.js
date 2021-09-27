// pages/login/login.js
import login from "../../network/login"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:""
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
    this.setData({
      username:wx.getStorageSync('username'),
      password:wx.getStorageSync('password')
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

  },
  formSubmit(e){
    console.log(e.detail.value);
    
    wx.showLoading({
      title: '登陆中',
    })

    login(e.detail.value).then(res => {
      //登录成功的情况
      console.log(res)
      wx.hideLoading({
        success: () => {
          if(res.code === 1){
            wx.showToast({
              title: '登陆成功',
              duration:1500
            })
            wx.setStorageSync('token', res.data);
            setTimeout(() => {
              wx.switchTab({
                url: '/pages/home/home',
              })
            },1500);
          }else{
            wx.showToast({
              title: res.msg,
              icon:"error",
            })
          }
        },
      })
    }).catch(err => {
      console.log(err)
      wx.hideLoading({
        success: () => {
          wx.showToast({
            title: '网络错误',
            icon:'error',
            duration:1500
          })
        },
      })
    })
  }
})