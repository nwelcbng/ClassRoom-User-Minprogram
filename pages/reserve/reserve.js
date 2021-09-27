
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getUserProfile();
    const userInfo = wx.getStorageSync('userInfo') || null; //取出缓存里面的用户信息
    if(userInfo != null){
      this.setData({
        hasUserInfo:true,
        userInfo:userInfo
      })
    }
  // console.log(this.data.userInfo)
  },

  onShareAppMessage(){
    return {
      title:"elc报名网站",
      path:"/pages/home/home"
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.userInfo);
        wx.setStorageSync('userInfo',res.userInfo);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  }

})