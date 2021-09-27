// pages/userinfo/userinfo.js
import {submit,getUserinfo} from "../../network/userinfo"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    level:"",
    sno:"",
    class:"",
    major:"",
    college:"",
    level:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getUserinfo().then(res => {
      if(res.code == 1){
        res = res.data
        this.setData({
          username:res.username,
          level:res.level,
          sno:res.sno,
          class:res.userClass,
          major:res.major,
          college:res.college
        })
      }else{
        wx.showToast({
          title: res.msg,
          icon:"error",
        })
      }
    }).catch(err => {
      wx.showToast({
        title: '网络错误',
        icon:"error",
        duration:1500
      })
    })
  },

  submit(){
    const form = {
      sno:this.data.sno,
      class:this.data.class,
      major:this.data.major,
      college:this.data.college
    }
    console.log(form);
    wx.showLoading({
      title: '请求中'
    })
    submit(form).then(res => {
      console.log(res)
      wx.hideLoading({
        success: () => {
          if(res.code === 1){
            wx.showToast({
              title: '修改成功',
              duration:1500
            })
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
            icon:"error",
            duration:1500
          })
        },
      })
    })
  }
})