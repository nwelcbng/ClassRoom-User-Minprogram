// pages/password/password.js
import password from "../../network/password"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    password:""
  },

  submit(){
    wx.showLoading({
      title: '请求中'
    })
    password({password:this.data.password}).then(res => {
      console.log(res)
      wx.hideLoading({
        success: () => {
          if(res.code === 1){
            wx.showToast({
              title: '修改成功',
              duration:1500
            })
            setTimeout(() => {
              wx.navigateTo({
                url: '/pages/login/login',
              })
            },1500) 
          }else{
            wx.showToast({
              title: res.msg,
              icon:'error'
            })
          }
        },
      })
    }).catch(err => {
      wx.hideLoading({
        success: () => {
          wx.showToast({
            title: '网络错误',
            icon:"error",
            duration:1500
          })
        },
      })
    })
  }
})