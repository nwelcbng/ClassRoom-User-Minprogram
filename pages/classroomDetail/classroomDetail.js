// pages/classroomDetail/classroomDetail.js
import { refresh,reserve } from '../../network/classroomDetail'

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
    dataUncode:'',
    Dateshow: false,
    array: ['8:00-9:40', '10:00-11:40', '11:00-12:00', '14:30-16:10','16:20-18:00','19:00-20:40','20:50-21:35'],
    classStatus:[],
    index: 0, //选择器的序号
    inputValue:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let Timedefault = this.formatDate(new Date());
    this.setData({
      cid:options.cid,
      position:options.position,
      type:options.type,
      capacity:options.capacity,
      date:Timedefault
    });
    this.refresh();
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
    this.setData({
      dataUncode:date
    })
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  DateOnConfirm(event) {
    this.setData({
      Dateshow: false,
      date: this.formatDate(event.detail),
    });
    this.refresh();
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  submit(){
    const data = {
      sid:this.data.classStatus[this.data.index].sid,
      remark:this.data.inputValue
    }
    console.log(data);
    reserve(data).then(res => {
      wx.showToast({
        title: '预定成功'
      })
    })
  },
  refresh(){
      wx.showLoading({
        title: '请求中',
      })
      console.log({
        cid:this.data.cid,
        date:this.DateChange(this.data.dataUncode)
      })
      refresh({
        cid:this.data.cid,
        date:this.DateChange(this.data.dataUncode)
      }).then(res => {
        console.log(res)
        let obj = [
          {
            date: "2004-08-07",
            moment: 1,
            sid: "sid1",
            status: 1
          },
          {
            date: "2004-08-07",
            moment: 3,
            sid: "sid2",
            status: 2
          },
          {
            date: "2004-08-07",
            moment: 2,
            sid: "sid3",
            status: 3
          },
          {
            date: "2004-08-07",
            moment: 6,
            sid: "sid4",
            status: 4
          },
          {
            date: "2004-08-07",
            moment: 5,
            sid: "sid5",
            status: 5
          },
          {
            date: "2004-08-07",
            moment: 4,
            sid: "sid6",
            status: 6
          },
          {
            date: "2004-08-07",
            moment: 0,
            sid: "sid7",
            status: 7
          }
        ]
        let classStatus = obj.sort((a,b) => {
          return a.moment - b.moment;
        })
        this.setData({
          classStatus:classStatus
        })
      }).finally(() => {
        wx.hideLoading({
          success: (res) => {},
        })
      })
  },
  DateChange(time){
    let month = time.getMonth();
    let date = time.getDate();
    // if(month < 10){
    //   month = '0' + month;
    // }
    // if(date < 10){
    //   date = '0' + date; 
    // }
    return time.getFullYear()+ '-' + month + '-' + date;
  }
})