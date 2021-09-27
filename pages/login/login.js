// pages/login/login.js
import login from "../../network/login"

Page({

  data: {
    username:"",
    password:""
  },

  onShow: function () {
    this.setData({
      username:wx.getStorageSync('username'),
      password:wx.getStorageSync('password')
    })
  },

  formSubmit(e){

    wx.showLoading({
      title: '登陆中',
    })

    login(e.detail.value).then(res => {
      //登录成功的情况
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
                url: '/pages/classroom/classroom',
              })
            },1000);
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