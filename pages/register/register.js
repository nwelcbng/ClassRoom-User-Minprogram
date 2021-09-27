// pages/register/register.js

import register from"../../network/register"

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit(e){
    wx.setStorageSync('username', e.detail.value.username);
    wx.setStorageSync('password', e.detail.value.password);
    e.detail.value.level = 1;
    wx.showLoading({
      title: '请求中'
    })
    register(e.detail.value).then(res => {
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