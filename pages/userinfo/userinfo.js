// pages/userinfo/userinfo.js
import {submit,getUserinfo} from "../../network/userinfo"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"qweqwew",
    level:"用户",
    sno:"31209392",
    class:"材料4班",
    major:"材料",
    college:"计算机学院",
    level:"成员"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getUserinfo().then(res => {
      console.log(res);
      this.setData({
        username:res.username,
        level:res.level,
        sno:res.sno,
        class:res.class,
        major:res.major,
        college:res.college
      })
    }).catch(err => {
      wx.showToast({
        title: err,
        icon:"error",
        duration:1500
      })
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

  },
  submit(){
    const form = {
      username:this.data.username,
      level:this.data.level,
      sno:this.data.sno,
      class:this.data.class,
      major:this.data.major,
      college:this.data.college,
      level:this.data.level
    }
    console.log(JSON.stringify(form))
    submit(JSON.stringify(form)).then(res => {
      console.log(res)
      wx.showToast({
        title: '修改成功',
        duration:1500
      })
    }).catch(err => {
      wx.showToast({
        title: err,
        icon:"error",
        duration:1500
      })
    })
  }
})