// // pages/home/home.js
// import {getSwiper} from "../../network/home"
import {getNews,searchNews} from "../../network/home"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:null,
    background: [
      {
        image:'/assets/imgs/news/student.jpg'
      },
      {
        image:'/assets/imgs/news/college.jpg'
      },
      {
        image:'/assets/imgs/news/admin.jpg'
      }
      ],  //这是本地图片
      news:[],
      newsSearch:[]
  },
  onShow: function (options) {
    this.searchInfo();
  },
  onPullDownRefresh(){
    wx.stopPullDownRefresh({
      success: () => {
        this.searchInfo();
      },
    })

  },
  onSearch(options){
    let search = {
      title:options.detail.title
    }
    searchNews(search).then(res => {
      if(res.code === 1){
        this.convertDate(res.data);
        wx.setStorageSync('newsSearch', res.data);
        this.setData({
          newsSearch:res.data
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
        icon:'error'
      })
    })
  },
  convertDate(data){
    data.forEach(item => {
      let date = new Date(item.date);
      item.date = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
    })
  },
  searchInfo(){
    wx.showLoading({
      title: '加载中'
    })
    getNews().then(res => {
      wx.hideLoading({
        success: () => {
          if(res.code === 1){
            this.convertDate(res.data);
            wx.setStorageSync('news', res.data);
            this.setData({
              news:res.data
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
      wx.hideLoading({
        success: () => {
          wx.showToast({
            title: '网络错误',
            icon:'error'
          })
        },
      })
    })
  }
})