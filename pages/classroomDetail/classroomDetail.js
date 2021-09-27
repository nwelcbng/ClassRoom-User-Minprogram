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
    array: ['8:00-9:40', '10:00-11:40', '14:30-16:10','16:20-18:00','19:00-20:40','20:50-21:35'],
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
   * 用户点击右上角分享
   */
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
    this.setData({
      index: e.detail.value
    })
  },
  submit(){
    const data = {
      sid:this.data.classStatus[this.data.index].sid,
      remark:this.data.inputValue
    }
    wx.showLoading({
      title: '请求中'
    })
    reserve(data).then(res => {
      wx.hideLoading({
        success: () => {
          if(res.code === 1){
            wx.showToast({
              title: '预约成功',
              duration:1500
            })
          }else{
            wx.showToast({
              title: res.msg,
              icon:'error',
              duration:1500
            })
          }
        },
      })
    }).catch(err => {
      wx.showToast({
        title: '网络错误',
        icon:'error'
      })
    })
  },
  refresh(){
      wx.showLoading({
        title: '请求中',
      })
      refresh({
        cid:this.data.cid,
        date:this.DateChange(this.data.dataUncode)
      }).then(res => {
        wx.hideLoading({
          success: () => {
            if(res.code === 1){
              let classStatus = res.data.sort((a,b) => {
                return a.moment - b.moment;
              })
              this.setData({
                classStatus:classStatus
              })
            }
          },
        })

      })
  },
  DateChange(time){
    let month = time.getMonth() + 1;
    let date = time.getDate();
    if(month < 10){
      month = '0' + month;
    }
    if(date < 10){
      date = '0' + date; 
    }
    return time.getFullYear()+ '-' + month + '-' + date;
  }
})