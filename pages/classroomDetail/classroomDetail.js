// pages/classroomDetail/classroomDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid:0,
    position:"",
    type:"",
    capacity:"",
    date: '',
    Dateshow: false,
    array: ['8:00-9:40', '10:00-11:40', '11:00-12:00', '14:30-16:10','16:20-18:00','19:00-20:40','20:50-21:35'],
    index: 0,
    inputValue:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      cid:options.cid,
      position:options.position,
      type:options.type,
      capacity:options.capacity
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
  DateOnDisplay() {
    this.setData({ Dateshow: true });
  },
  DateOnClose() {
    this.setData({ Dateshow: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  DateOnConfirm(event) {
    this.setData({
      Dateshow: false,
      date: this.formatDate(event.detail),
    });
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  submit(){
    const data = {
      sid:123,
      remark:this.data.inputValue
    }
    console.log(data)
  }

})